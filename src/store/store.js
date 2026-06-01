// Redux store configuration
import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksSlice";

const store = configureStore({
  reducer: {
    // books reducer manage karega saari books ki state
    books: booksReducer,
  },
});

export default store;