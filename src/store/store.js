import { configureStore } from '@reduxjs/toolkit'
import activeUserReducer from './activeUserSlice'
// import usersReducer from './usersSlice'

export const store = configureStore({
  reducer: {
    activeUser: activeUserReducer,
   
  },
})