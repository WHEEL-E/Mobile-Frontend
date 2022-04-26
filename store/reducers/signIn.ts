import {
  ActionTypes,
  AuthAction,
  AuthState,
} from "../../utilities/signInUtils";

const initialState = {
  isLoading: true,
  isSignOut: false,
};

const signInReducer = (
  state: AuthState = initialState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case ActionTypes.RESTORE_TOKEN:
      return {
        ...state,
        isLoading: false,
      };
    case ActionTypes.SIGN_IN:
      return {
        ...state,
        isSignOut: false,
      };
    case ActionTypes.SIGN_OUT:
      return {
        ...state,
        isSignOut: true,
      };
  }
  return state;
};

export default signInReducer;
