export const CHANGE_USER_NAME = "PROFILE::CHANGE_USER_NAME";

export const changeUserName = (name) => ({
    type: CHANGE_USER_NAME,
    payload: {
        name,
    }
});