import { AuthActions } from "./action_types";

export const signIn = (userToken: string) => {
    return {
        type: AuthActions.SIGN_IN,
        token: userToken
    };
}

export const signOut = () => {
    return {
        type: AuthActions.SIGN_OUT
    };
}

export const restore = (userToken: string | null | undefined) => {
    return {
        type: AuthActions.RESTORE_TOKEN,
        token: userToken
    }
}