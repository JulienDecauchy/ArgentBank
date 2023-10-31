import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import userReducer from "./userSlice";

const store = createStore(userReducer, applyMiddleware(thunk));


export default store;