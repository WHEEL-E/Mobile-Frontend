import {
  UserAction,
  UserActionTypes,
  UserState,
} from "../../utilities/types/userTypes";

const initialState = {
  userData: null,
  isLoggedIn: false,
  isRestoringData: true,
};

const userReducer = (
  state: UserState = initialState,
  action: UserAction
): UserState | null => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN:
      return {
        isRestoringData: false,
        userData: action.data!,
        isLoggedIn: true,
      };
    case UserActionTypes.SIGN_OUT:
      return {
        isRestoringData: false,
        userData: null,
        isLoggedIn: false,
      };
    case UserActionTypes.RESTORE_USER:
      return {
        isRestoringData: false,
        userData: action.data!,
        isLoggedIn: true,
      };
  }
  return state;
};

export default userReducer;
