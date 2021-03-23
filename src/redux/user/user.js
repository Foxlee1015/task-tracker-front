import { apiPostCall } from "../../utils/apicall";

const VALIDATE_TOKEN_REQUEST = "VALIDATE_TOKEN_REQUEST";
const VALIDATE_TOKEN_SUCCESS = "VALIDATE_TOKEN_SUCCESS";
const VALIDATE_TOKEN_FAIL = "VALIDATE_TOKEN_FAIL";

const validateUserToken = () => {
    const endpoint = 'tokens/validate';
    const responseCallback = function (response) {
        if (response.status === 200) {
            validateTokenSuccess(response.data.result);
        } else {
            validateTokenFail();
        }
    };

    apiPostCall({
        endpoint,
        responseCallback,
        failCallback:validateTokenFail,
        finalCallback:validateTokenFail
    })
}

// export const validateToken = () => {
//     return (dispatch) => {
//         dispatch(validateUserToken());
//     };
// };

const validateTokenRequest = () => {
    return {
        type: VALIDATE_TOKEN_REQUEST,
    };
};

const validateTokenSuccess = (data) => {
    return {
        type: VALIDATE_TOKEN_SUCCESS,
        payload: data,
    };
};

const validateTokenFail = () => {
    return {
        type: VALIDATE_TOKEN_FAIL
    };
};


const initialState = {
    user: null,
};

export const userReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case VALIDATE_TOKEN_REQUEST:
            return {
                ...state,
            };
        case VALIDATE_TOKEN_SUCCESS:
            return {
                ...state,
                user: action.payload,
            };
        case VALIDATE_TOKEN_FAIL:
            return {
                ...state,
            };
        default:
            return {
                ...state,
            };
    }
};