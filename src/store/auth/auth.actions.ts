import { createAsyncThunk } from '@reduxjs/toolkit'
import API from '../../API'
import type { ILoginActionPayload, ITokenResponseData } from './auth.types'
import { AuthActionTypes } from './auth.types'

export const login = createAsyncThunk<
    ITokenResponseData,
    ILoginActionPayload
>(AuthActionTypes.LOGIN, async (credentials) => {
    const { data }: { data: ITokenResponseData } = await API.login(credentials.username, credentials.password)
    return data
})