import { FETCH_STATUSES } from "../constants";
import { GET_USERS_FAILURE, GET_USERS_REQUEST, GET_USERS_SUCCESS } from "./actions";

const initialState = {
    data: [],
    error: null, 
    status: FETCH_STATUSES.IDLE,
};
  
export const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_USERS_REQUEST: {
            return {...state,
                error: null,
                status: FETCH_STATUSES.REQUEST,
        };
    }
        case GET_USERS_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                status: FETCH_STATUSES.SUCCESS,
            };
        }
        case GET_USERS_FAILURE: {
            return {
                ...state,
                error: action.payload,
                status: FETCH_STATUSES.FAILURE,
            };
        }
        default:
            return state;
    }
}