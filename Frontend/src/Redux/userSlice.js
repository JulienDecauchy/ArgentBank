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

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isAuthenticated: true,
                token: action.payload,
            };
        case USER:
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload,
                },
            };
        case USER_NAME:
            return {
                ...state,
                user: {
                    ...state.user,
                    userName: action.payload,
                },
            };
        case LOGOUT:
            return initialState;

        default:
            return state;
    }
};