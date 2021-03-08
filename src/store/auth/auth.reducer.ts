import { createSlice } from '@reduxjs/toolkit'
import { login } from './auth.actions'

const initialState = {
    token: ''
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(login.fulfilled, (state, { payload }) => {
            state.token = payload.token
        })
    }
})

export default authSlice.reducer