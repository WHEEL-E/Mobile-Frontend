import {
  AuthActionTypes,
  AuthAction,
  AuthState,
} from "../../utilities/signInUtils";

const initialState = {
  isLoading: true,
  isSignOut: true,
};

const signInReducer = (
  state: AuthState = initialState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case AuthActionTypes.RESTORE_TOKEN:
      return {
        ...state,
        isLoading: false,
        isSignOut: action.isSignedOut,
      };
    case AuthActionTypes.SIGN_IN:
      return {
        ...state,
        isSignOut: false,
      };
    case AuthActionTypes.SIGN_OUT:
      return {
        ...state,
        isSignOut: true,
      };
  }
  return state;
};

export default signInReducer;
