import {
  UserAction,
  UserActionTypes,
  Userstate,
} from "../../utilities/types/userTypes";

const initialState = null;

const userReducer = (
  state: Userstate | null = initialState,
  action: UserAction
): Userstate | null => {
  switch (action.type) {
    case UserActionTypes.STORE_USER:
      return action.data!;
    case UserActionTypes.DELETE_USER:
      return null;
  }
  return state;
};

export default userReducer;
