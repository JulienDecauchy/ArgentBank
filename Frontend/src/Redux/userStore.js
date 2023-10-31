import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    user: userReducer
  }
})

const handleStateChange = () => {
  const currentState = store.getState();
};
store.subscribe(handleStateChange);

export default store;