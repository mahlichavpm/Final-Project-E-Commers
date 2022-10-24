import { configureStore } from '@reduxjs/toolkit'
import activeUserReducer from './activeUserSlice'
import userManagerReducer from './userManagerSlice'
import productSlice from './productSlice'
// import usersReducer from './usersSlice'

export const store = configureStore({
  reducer: {
    activeUser: activeUserReducer,
    userManager: userManagerReducer,
    product: productSlice,
   
  },
})