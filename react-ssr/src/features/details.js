/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import apiService from '../services/ApiService';

export const searchPhotoInfo = createAsyncThunk(
  'home/searchPhotos',
  async (id) => apiService.getInfo(id)
);

const detailsSlice = createSlice({
  name: 'details',
  initialState: {
    photoInfo: null,
    isLoading: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchPhotoInfo.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(searchPhotoInfo.fulfilled, (state, action) => {
      state.photoInfo = action.payload;
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(searchPhotoInfo.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default detailsSlice.reducer;
