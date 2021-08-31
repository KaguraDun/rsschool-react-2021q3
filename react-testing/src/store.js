import { configureStore } from '@reduxjs/toolkit';

import detailsSlice from '@/features/details';
import searchSlice from '@/features/search';

const store = configureStore({
  reducer: {
    search: searchSlice,
    details: detailsSlice,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
