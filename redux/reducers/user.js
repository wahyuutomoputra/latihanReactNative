import { SET_USER, SET_LOGIN } from '../actionTypes'

const initialState = {
    user: null,
    login: false
}

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_USER: {
            const user = action.payload;
            return {
                ...state,
                user: user
            }
        }
        case SET_LOGIN: {
            const login = action.payload;
            return {
                ...state,
                login: login
            }
        }
        default:
            return state;
    }
}