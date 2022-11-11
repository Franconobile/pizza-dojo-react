import { arraycategorias } from '../../../data/data';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: arraycategorias,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
});

export default categoriesSlice.reducer;
