import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// Define the async thunk
export const fetchTodos = createAsyncThunk("todo/fetchTodos", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return response.data;
});

interface TodoState {
  isLoading: boolean;
  isError: boolean;
  data: any[] | null;
}

const initialState: TodoState = {
  isLoading: false,
  isError: false,
  data: null,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {}, // This is required even if it's an empty object
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchTodos.fulfilled, (state, action: PayloadAction<any[]>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        console.error("Error", action.error);
      });
  },
});

export default todoSlice.reducer;
