import { FETCH_STATUSES } from "../constants"

export const selectUsersData = (state) => state.users.data;
export const selectUsersIsLoading = (state) =>
    state.users.status === FETCH_STATUSES.REQUEST;
export const selectUsersError = (state) => state.users.error;