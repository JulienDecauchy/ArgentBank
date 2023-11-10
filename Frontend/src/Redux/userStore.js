import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import userReducer from "./userSlice";

const KEY = "root";

const persistConfig = {
  key: KEY,
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));

const persistor = persistStore(store);

export { store, persistor };