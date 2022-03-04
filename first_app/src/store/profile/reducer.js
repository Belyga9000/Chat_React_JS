import { CHANGE_CHECKBOX_STATE } from "./actions"

const initialState = {
    name: "Default",
    initialState: false,
}


export const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_CHECKBOX_STATE: {
            return {
                ...state,
                initialState: !state.initialState,
            };
        }
        default:
            return state;
    } 
}