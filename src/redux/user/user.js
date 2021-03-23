import { apiPostCall } from "../../utils/apicall";

const FETCH_USER_BY_TOKEN = "FETCH_USER_BY_TOKEN";

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

const initialState = {
    name: null,
    is_admin: null
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_BY_TOKEN:
            return action.payload;
        default:
            return {
                ...state,
            };
    }
};