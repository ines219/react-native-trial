import { AuthActions } from '../actions/action_types';
import { produce } from 'immer';

const initialState = {
    isLoading: true,
    isSignout: false,
    userToken: null
};

interface AuthPayload {
    token: string | null | undefined
}

export type AuthReducerType = {
    type: AuthActions,
    token: any
}

const authReducer = (state = initialState, action: AuthReducerType) => {
    switch (action.type) {
        case AuthActions.RESTORE_TOKEN:
            return produce(state, draft => {
                draft.userToken = action.token,
                draft.isLoading = false
            });
        case AuthActions.SIGN_IN:
            return produce(state, draft => {
                draft.userToken = action.token,
                draft.isSignout = false
            });
        case AuthActions.SIGN_OUT:
            return produce(state, draft => {
                draft.userToken = null,
                draft.isSignout = true
            });
        default:
            return state;
    }
}

export default authReducer;