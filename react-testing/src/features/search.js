/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import sortOptions from '@/models/sortOptions';

import apiService from '../services/ApiService';

export const searchPhotos = createAsyncThunk(
  'search/searchPhotos',
  async ({ value, options }) =>
    apiService.getData(value, options).then(async (data) => {
      const photo = await Promise.all(apiService.getDataWithImages(data, 4));
      const updatedData = JSON.parse(JSON.stringify(data));

      updatedData.photos.photo = photo;
      return updatedData;
    })
);

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    result: [],
    options: {
      sort: Object.keys(sortOptions)[0],
      resultsPerPage: 10,
      currentPage: 1,
    },
    value: null,
    isLoading: false,
    isError: false,
  },
  reducers: {
    submitSearchValue: (state, action) => {
      state.value = action.payload;
    },
    setSearchOptions: (state, action) => {
      state.options = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchPhotos.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(searchPhotos.fulfilled, (state, action) => {
      state.result = action.payload;
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(searchPhotos.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const { submitSearchValue, setSearchOptions } = searchSlice.actions;

export default searchSlice.reducer;
