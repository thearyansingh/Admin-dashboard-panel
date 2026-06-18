import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Features/authSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // uses localStorage

import { combineReducers } from "redux"; // it combines all the reducers as a root
const rootReducer = combineReducers({
  auth: authReducer,
});

const persistConfig = {
  // config to store the  redux state to the localstorage
  key: "root",
  storage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer); // this built in function will  use config object and root reducer to persist

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
