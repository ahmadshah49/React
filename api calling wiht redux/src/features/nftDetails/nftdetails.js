// src/features/nftDetail/nftDetailSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../axiosInstance";

export const fetchNFTDetail = createAsyncThunk(
  "nftDetail/fetchNFTDetail",
  async ({ chain, address, id }) => {
    const response = await axiosInstance.get(
      `https://api.opensea.io/api/v2/chain/${chain}/contract/${address}/nfts/${id}`
    );
    return response.data.nft;
  }
);

const nftDetailSlice = createSlice({
  name: "nftDetail",
  initialState: {
    nft: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNFTDetail.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNFTDetail.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.nft = action.payload;
      })
      .addCase(fetchNFTDetail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default nftDetailSlice.reducer;
