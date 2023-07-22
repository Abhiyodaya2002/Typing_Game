import { combineReducers, configureStore } from "@reduxjs/toolkit";
// Setting Redux for state management
import playersSlice from "./fetures/playersSlice";

const rootReducer = combineReducers({
  playersInfo: playersSlice,
});

export default configureStore({
  reducer: {
    rootReducer: rootReducer,
  },
});
