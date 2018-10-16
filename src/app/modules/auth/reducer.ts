import types from './types';
const initialState = {
    auth: false,
    reg: false,
};

export default function authReducer(state = initialState, action: any) {

    switch (action.type) {
        case types.SIGN_SUCCESS:
            return {
                ...state,
            };
            case types.SIGN_FAIL:
            return {
                ...state,
            };
        default:
            return state;
    }
};

