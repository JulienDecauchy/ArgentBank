import axios from 'axios'

const LOGIN = 'user/login'
const LOGIN_RESOLVED = 'user/loginResolved'
const LOGIN_REJECTED = 'user/loginRejected'
const LOGOUT = 'user/logout'
const userLogin = () => ({ type: LOGIN })
const userLoginResolved = (data) => ({ type: LOGIN_RESOLVED, payload: data })
const userLoginRejected = (error) => ({ type: LOGIN_REJECTED, payload: error })
const userLogout = () => ({ type: LOGOUT })

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