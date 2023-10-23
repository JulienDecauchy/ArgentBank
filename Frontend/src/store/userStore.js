import { configureStore } from "@reduxjs/toolkit";
import axios from 'axios'
import { produce } from 'immer'

const initialState = {
    status: 'void',
    token: null,
    data: null,
    error: null,
}

const LOGIN = 'user/login'
const LOGIN_RESOLVED = 'user/loginResolved'
const LOGIN_REJECTED = 'user/loginRejected'
const LOGOUT = 'user/logout'

const PROFILE = 'user/profile'
const PROFILE_RESOLVED = 'user/profileResolved'
const PROFILE_REJECTED = 'user/profileRejected'

const userLogin = () => ({ type: LOGIN })
const userLoginResolved = (data) => ({ type: LOGIN_RESOLVED, payload: data })
const userLoginRejected = (error) => ({ type: LOGIN_REJECTED, payload: error })
const userLogout = () => ({ type: LOGOUT })

const userGetProfile = () => ({ type: PROFILE })
const userProfileResolved = (data) => ({
    type: PROFILE_RESOLVED,
    payload: data,
  })
  const userProfileRejected = (error) => ({
    type: PROFILE_REJECTED,
    payload: error,
  })

const API = 'http://localhost:3001/api/v1/user/'

// Login - Logout
export async function loginUser(store, email, password) {
    const status = store.getState().status
    if (status === 'pending' || status === 'updating') {
        return
    }
    store.dispatch(userLogin())
    try {
        const response = await axios.post(API + 'login', { email, password })
        const data = response.data.body.token
        store.dispatch(userLoginResolved(data))
    } catch (error) {
        store.dispatch(userLoginRejected(error))
    }
}

export function logoutUser(store) {
    store.dispatch(userLogout())
}

//profile user : accès aux ressources protégées du backend, entête Authorization nécessaire avec un token
export const userProfile = async (token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    store.dispatch(userGetProfile())
    try {
      const response = await axios.post(URL + 'profile', {}, config)
      const data = response.data.body
      store.dispatch(userProfileResolved(data))
    } catch (error) {
      store.dispatch(userProfileRejected(error))
    }
  }


// reducers login
function userReducer(state = initialState, action) {
    return produce(state, (draft) => {
        switch (action.type) {
            case LOGIN: {
                if (draft.status === 'void') {
                    draft.status = 'pending'
                    return
                }
                if (draft.status === 'rejected') {
                    draft.error = null
                    draft.status = 'pending'
                    return
                }
                if (draft.status === 'resolved') {
                    draft.status = 'updating'
                    return
                }
                return
            }
            case LOGIN_RESOLVED: {
                if (draft.status === 'pending' || draft.status === 'updating') {
                    draft.token = action.payload
                    draft.status = 'resolved'
                    return
                }
                return
            }
            case LOGIN_REJECTED: {
                if (draft.status === 'pending' || draft.status === 'updating') {
                    draft.error = action.payload
                    draft.token = null
                    draft.status = 'rejected'
                    return
                }
                return
            }
            case LOGOUT: {
                draft.token = null
                draft.status = 'resolved'
                return
            }
        }
    })
}

const store = configureStore({
    reducer: {
        user: userReducer,
    }
})

export default store;