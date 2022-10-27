import { createSlice } from '@reduxjs/toolkit';
import { CategoriesDATA } from '../DATA/CategoriesDATA'; 

const initialState = {
    categories: CategoriesDATA
}

export const productManagerSlice = createSlice({
  name: 'categoriesManager',
  initialState,
  reducers: {
    globalCategories: (state) => {
     
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { globalCategories } = productManagerSlice.actions

export default productManagerSlice.reducer