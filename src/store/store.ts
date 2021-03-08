import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/auth.reducer'

export default configureStore({
    reducer: {
        auth: authReducer
    },
})

