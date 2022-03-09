import { CHANGE_USER_NAME } from "./actions"

const initialState = {
    name: `User${Date.now()}`,
}


export const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_USER_NAME: {
            return {
                ...state, 
                name: action.payload.name,
            }
        }
        default:
            return state;
    } 
}