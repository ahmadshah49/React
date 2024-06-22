// src/features/nfts/nftsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../axiosInstance";

export const fetchNFTs = createAsyncThunk("nfts/fetchNFTs", async (slug) => {
  const response = await axiosInstance.get(
    `https://api.opensea.io/api/v2/collection/${slug}/nfts`
  );
  return response.data.nfts;
});

const nftsSlice = createSlice({
  name: "nfts",
  initialState: {
    nfts: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNFTs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNFTs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.nfts = action.payload;
      })
      .addCase(fetchNFTs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default nftsSlice.reducer;
