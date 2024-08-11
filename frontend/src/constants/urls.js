const ROOT_URL = "http://localhost:8000/";

export const AuthUrls = {
    LOGIN: `${ROOT_URL}token/`,
    SIGNUP: `${ROOT_URL}rest-auth-registration/`,
    CHANGE_PASSWORD: `${ROOT_URL}api-auth/password/change/`,
    RESET_PASSWORD: `${ROOT_URL}api-auth/password/reset/`,
    RESET_PASSWORD_CONFIRM: `${ROOT_URL}api-auth/password/reset/confirm/`,
    USER_ACTIVATION: `${ROOT_URL}api-auth/registration/verify-email/`,
    USER_PROFILE: `${ROOT_URL}api-auth/user/`,
    UPDATE_CONTENT: `${ROOT_URL}update/page/`,
};