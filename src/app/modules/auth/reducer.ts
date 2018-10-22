import types from './types';
const initialState = {
    auth: false,
};

export default function authReducer(state = initialState, action: any) {
    const { payload, type } = action;
    switch (type) {
        case types.SIGN_SUCCESS:
            return {
                ...state,
                token: payload.res,
                auth: true,
            };
        case types.SIGN_FAIL:
            return {
                ...state,
                auth: false,
            };
        default:
            return state;
    }
};

