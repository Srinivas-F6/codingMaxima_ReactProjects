import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getjokes = createAsyncThunk(
  "joke/getJoke",
  async () => {
    const response = await axios.get("https://v2.jokeapi.dev/joke/Any?amount=5");
    console.log(response.data);
    return response.data.jokes;
  }
);

const jokeSlice = createSlice({
  name: "jokeapi",
  initialState: {
    joke: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getjokes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getjokes.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        state.joke = action.payload;
      });
  },
});

export default jokeSlice.reducer;
