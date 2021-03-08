import { PayloadAction } from '@reduxjs/toolkit'

export enum AuthActionTypes {
    LOGIN = 'AUTH/LOGIN',
    LOGIN_SUCCESS = 'AUTH/LOGIN_SUCCESS',
    LOGIN_FAILED = 'AUTH/LOGIN_FAILED',
}

export interface ILoginActionPayload {
    username: string
    password: string
}

export type LoginSuccessAction = PayloadAction<{ token: string }, AuthActionTypes>

export interface ITokenResponseData { token: string }