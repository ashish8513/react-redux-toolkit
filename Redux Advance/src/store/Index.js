import { configureStore } from '@reduxjs/toolkit'
import  userSlice  from './Slices/Userslice'

export const store = configureStore({
    reducer: {
        user: userSlice,
    },
    devtools: true,
})