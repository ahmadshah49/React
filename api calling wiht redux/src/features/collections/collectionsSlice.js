    
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../axiosInstance';

export const fetchCollections = createAsyncThunk(
  'collections/fetchCollections',
  async () => {
    const response = await axiosInstance.get(
      'https://api.opensea.io/api/v2/collections?order_by=seven_day_volume&order_direction=desc'
    );
    return response.data.collections.sort((a, b) => new Date(a.created_date) - new Date(b.created_date));
  }
);

const collectionsSlice = createSlice({
  name: 'collections',
  initialState: {
    collections: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCollections.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCollections.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.collections = action.payload;
      })
      .addCase(fetchCollections.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default collectionsSlice.reducer;
