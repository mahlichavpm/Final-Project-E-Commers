import { configureStore } from '@reduxjs/toolkit'
import activeUserReducer from './activeUserSlice'
import productSlice from './productSlice'
import categorySlice from './categorySlice'

export const store = configureStore({
  reducer: {
    activeUser: activeUserReducer,
    product: productSlice,
    categories: categorySlice,
  },
})