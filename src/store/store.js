// Mot store se chua mot hoac nhieu reducer
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/counterReducer";
import counterMultiplyReducer from "../reducers/counterMultiplyReducer";

// Khi store nhan action no se goi reducer tuong ung de xu ly
const rootreducer = combineReducers({
  counter: counterReducer,
  multiplyCounter: counterMultiplyReducer
})

const store = configureStore({
  reducer: rootreducer,
});

export default store;

