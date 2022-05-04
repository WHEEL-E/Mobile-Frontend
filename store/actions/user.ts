import { Dispatch } from "redux";
import * as SecureStore from "expo-secure-store";
import { User, UserActionTypes } from "../../utilities/types/userTypes";
import { SignInData } from "../../utilities/types/signInTypes";

export const signIn = (data: SignInData) => {
  return async (dispatch: Dispatch<{ type: UserActionTypes; data?: User }>) => {
    const response = await fetch(
      "https://wheel--e-default-rtdb.firebaseio.com/users.json"
    );

    if (!response.ok) {
    }
    const resData = await response.json();

    const getUser = () => {
      for (const field in resData) {
        if (resData[field].mainData.emailAddress === data.emailAddress) {
          return resData[field];
        }
      }
    };

    const user: User = getUser();
    dispatch({ type: UserActionTypes.SIGN_IN, data: user });

    try {
      await SecureStore.setItemAsync("userdata", JSON.stringify(user));
    } catch (e) {
      // nothing he'll just login again next time
    }
  };
};

export const signOut = () => {
  return async (dispatch: Dispatch<{ type: UserActionTypes; data?: User }>) => {
    try {
      await SecureStore.deleteItemAsync("userdata");
    } catch (e) {
      console.log(e);
    }
    dispatch({ type: UserActionTypes.SIGN_OUT });
  };
};

export const restoreUser = () => {
  return async (dispatch: Dispatch<{ type: UserActionTypes; data?: User }>) => {
    let userData: string | null = null;
    try {
      userData = await SecureStore.getItemAsync("userData");
    } catch (e) {
      console.log(e);
    }

    if (userData) {
      const user = JSON.parse(userData);
      dispatch({ type: UserActionTypes.RESTORE_USER, data: user });
    } else {
      dispatch({ type: UserActionTypes.SIGN_OUT });
    }
  };
};
