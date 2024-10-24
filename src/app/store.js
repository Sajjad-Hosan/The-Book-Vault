import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../Dashboard/GetApi/UserSlice'

export const store = configureStore({
  reducer: {
    users:userReducer
  },
})