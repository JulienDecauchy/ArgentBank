const LOGIN = "LOGIN";
const USER = "USER";
const USER_NAME = "USER_NAME";
const LOGOUT = "LOGOUT";

const initialState = {
  isAuthenticated: false,
  user: {
    email: null,
    firstName: null,
    id: null,
    lastName: null,
    userName: null,
    rememberMe: null,
  },
  token: null,
};