import {
  ActionTypes,
  AuthAction,
  AuthState,
} from "../../utilities/signInUtils";

const initialState = {
  isLoading: true,
  isSignOut: false,
  userToken: undefined,
};

const signInReducer = (
  state: AuthState = initialState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case ActionTypes.RESTORE_TOKEN:
      return {
        ...state,
        userToken: action.token,
        isLoading: false,
      };
    case ActionTypes.SIGN_IN:
      return {
        ...state,
        isSignOut: false,
        userToken: action.token,
      };
    case ActionTypes.SIGN_OUT:
      return {
        ...state,
        isSignOut: true,
        userToken: undefined,
      };
  }
  return state;
};

export default signInReducer;
