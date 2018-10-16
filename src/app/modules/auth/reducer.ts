import types from './types';
const initialState = {
    userName: 'Add some information about you ',
    userEmail: '',
};

export default function profileReducer(state = initialState, action: any) {
    const {
        payload
    } = action;
    switch (action.type) {
        case types.SAVE_PROFILE_SUCCESS:
            const {
                userName,
                userEmail,
            } = payload;
            return {
                ...state,
                userName,
                userEmail,
            };
        default:
            return state;
    }
};

