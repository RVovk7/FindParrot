import API from 'helpers/api/sign';
import { Dispatch } from 'redux';
import types from './types';
import generateBody from 'util/generateBody';
import { has } from 'lodash';
import dispatchAuth from 'util/dispatchAuth';

export const postAuth = (data: any, endpoint: string) => async (dispatch: Dispatch) => {
        const res = await API.post(generateBody(data, endpoint), endpoint);
        if (has(res, 'jwt')) dispatchAuth(res, dispatch, types.SIGN_SUCCESS);
        if (has(res, 'errors')) dispatchAuth(res, dispatch, types.SIGN_FAIL);
    };