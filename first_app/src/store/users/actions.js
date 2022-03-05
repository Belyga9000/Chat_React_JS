import { apiUrl } from "../constants";
export const GET_USERS_REQUEST = "USERS::GET_USERS_REQUEST";
export const GET_USERS_SUCCESS = "USERS::GET_USERS_SUCCESS";
export const GET_USERS_FAILURE = "USERS::GET_USERS_FAILURE";

export const getUsersRequest = () => ({
    type: GET_USERS_REQUEST,
});

export const getUsersSuccess = (users) => ({
    type: GET_USERS_SUCCESS,
    payload: users,
});

export const getUsersFailure = (error) => ({
    type: GET_USERS_FAILURE,
    payload: error,
});

export const getUsersData = () => async (dispatch) => {
    dispatch(getUsersRequest())
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(response.status)
        }
        const users = await response.json();
        dispatch(getUsersSuccess(users))
        } catch (err) {
        dispatch(getUsersFailure(err))
        }
}