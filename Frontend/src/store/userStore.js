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
const userLogin = () => ({ type: LOGIN })
const userLoginResolved = (data) => ({ type: LOGIN_RESOLVED, payload: data })
const userLoginRejected = (error) => ({ type: LOGIN_REJECTED, payload: error })
const userLogout = () => ({ type: LOGOUT })

const PROFILE = 'user/profile'
const PROFILE_RESOLVED = 'user/profileResolved'
const PROFILE_REJECTED = 'user/profileRejected'
const userGetProfile = () => ({ type: PROFILE })
const userProfileResolved = (data) => ({
  type: PROFILE_RESOLVED,
  payload: data,
})
const userProfileRejected = (error) => ({
  type: PROFILE_REJECTED,
  payload: error,
})

const SET_PROFILE = 'user/setProfile'
const SET_PROFILE_RESOLVED = 'user/setProfileResolved'
const SET_PROFILE_REJECTED = 'user/setProfileRejected'
const userSetProfile = () => ({ type: SET_PROFILE })
const userSetProfileResolved = (data) => ({
  type: SET_PROFILE_RESOLVED,
  payload: data,
})
const userSetProfileRejected = (error) => ({
  type: SET_PROFILE_REJECTED,
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

// Profile user
export const userProfile = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  store.dispatch(userGetProfile())
  try {
    const response = await axios.post(API + 'profile', {}, config)
    const data = response.data.body
    store.dispatch(userProfileResolved(data))
  } catch (error) {
    store.dispatch(userProfileRejected(error))
  }
}

// Profile user - Update
export const updateUserData = async (newData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  store.dispatch(userSetProfile())
  try {
    const response = await axios.put(API + 'profile', newData, config)
    const data = response.data.body
    store.dispatch(userSetProfileResolved(data))
  } catch (error) {
    store.dispatch(userSetProfileRejected(error))
  }
}


// reducers login
function userReducer(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case PROFILE:
      case SET_PROFILE:
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
      case SET_PROFILE_RESOLVED:
      case PROFILE_RESOLVED: {
        if (draft.status === 'pending' || draft.status === 'updating') {
          draft.data = action.payload
          draft.status = 'resolved'
          return
        }
        return
      }
      case SET_PROFILE_REJECTED:
      case PROFILE_REJECTED: {
        if (draft.status === 'pending' || draft.status === 'updating') {
          draft.error = action.payload
          draft.data = null
          draft.status = 'rejected'
          return
        }
        return
      }
      default:
        return
    }
  })
}

const store = configureStore({
  reducer: {
    user: userReducer,
  }
})

export default store;