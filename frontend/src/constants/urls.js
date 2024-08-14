const ROOT_URL = process.env.REACT_APP_BACKEND_URL;

export const AuthUrls = {
    LOGIN: `${ROOT_URL}/token/`,
    SIGNUP: `${ROOT_URL}/rest-auth-registration/`,
    CHANGE_PASSWORD: `${ROOT_URL}/api-auth/password/change/`,
    RESET_PASSWORD: `${ROOT_URL}/api-auth/password/reset/`,
    RESET_PASSWORD_CONFIRM: `${ROOT_URL}/api-auth/password/reset/confirm/`,
    USER_ACTIVATION: `${ROOT_URL}/api-auth/registration/verify-email/`,
    USER_PROFILE: `${ROOT_URL}/api-auth/user/`,
    LOAD_CONTENT: `${ROOT_URL}/api/info/`,
    UPDATE_CONTENT: `${ROOT_URL}/api/update/page/`,
};