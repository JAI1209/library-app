// Redux slice for managing the books state
import { createSlice } from "@reduxjs/toolkit";
import { books } from "../data/books";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    // Initialize with dummy data
    booksList: books,
  },
  reducers: {
    // Action to add a new book to the beginning of the list
    addBook: (state, action) => {
      state.booksList.unshift(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;