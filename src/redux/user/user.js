import { apiPostCall } from "../../utils/apicall";

const FETCH_USER_BY_TOKEN = "FETCH_USER_BY_TOKEN";
const REGISTER_USER_BY_TOKEN = "REGISTER_USER_BY_TOKEN";
const REMOVE_USER_INFO = "REMOVE_USER_INFO";

export const getUserByToken = () => {
    const endpoint = 'tokens/validate';

    return async dispatch => {
        return apiPostCall({
            endpoint,
            responseCallback:function (response) {
                if (response.status === 200) {
                    dispatch(fetchUserByToken(response.data.result));
                }
        }})
    }
}

export const fetchUserByToken = (data) => {
    return {
        type: FETCH_USER_BY_TOKEN,
        payload: {
            name: data.iss,
            is_admin: data.is_admin
        }
    }
}

export const registerUserInfoInStore = (data) => {
    return {
        type: REGISTER_USER_BY_TOKEN,
        payload: {
            name: data.iss,
            is_admin: data.is_admin
        }
    }
}

export const removeUserInfoInStore = () => {
    return {
        type: REMOVE_USER_INFO,
        payload: {
            name: null,
            is_admin: null
        }
    }
}

const initialState = {
    name: null,
    is_admin: null
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_BY_TOKEN:
            return action.payload;
        case REGISTER_USER_BY_TOKEN:
            return action.payload;
        case REMOVE_USER_INFO:
            return action.payload;
        default:
            return {
                ...state,
            };
    }
};