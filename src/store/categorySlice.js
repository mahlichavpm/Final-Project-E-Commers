import { createSlice } from '@reduxjs/toolkit';
import { CategoriesDATA } from '../DATA/CategoriesDATA'; 

const initialState = {
    categories: CategoriesDATA
}

export const productManagerSlice = createSlice({
  name: 'categoriesManager',
  initialState,
})

export default productManagerSlice.reducer