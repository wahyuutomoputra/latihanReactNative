import { SET_USER, SET_TOKEN, SET_LOGIN } from './actionTypes'

export const setUser = user => ({ type: SET_USER, payload: user });
export const setToken = token => ({ type: SET_TOKEN, payload: token });
export const setLogin = login => ({ type: SET_LOGIN, payload: login });