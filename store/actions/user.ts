import { Dispatch } from "redux";
import * as SecureStore from "expo-secure-store";
import { User, UserActionTypes } from "../../utilities/types/userTypes";
import { SignInData } from "../../utilities/types/signInTypes";
import { ShowModal } from "./errorModal";

export const signIn = (data: SignInData) => {
  return async (dispatch: Dispatch<any>) => {
    const response = await fetch(
      "https://wheel--e-default-rtdb.firebaseio.com/users.json"
    );

    if (!response.ok) {
      dispatch(ShowModal("errorModal.signIn"));
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
      throw e;
    }
  };
};

export const signOut = () => {
  return async (dispatch: Dispatch<any>) => {
    try {
      await SecureStore.deleteItemAsync("userdata");
    } catch (e) {
      dispatch(ShowModal("errorModal.signOut"));
      throw e;
    }
    dispatch({ type: UserActionTypes.SIGN_OUT });
  };
};

export const restoreUser = () => {
  return async (dispatch: Dispatch<{ type: UserActionTypes; data?: User }>) => {
    let userData: string | null = null;
    try {
      userData = await SecureStore.getItemAsync("userData");
      if (userData) {
        const user = JSON.parse(userData);
        dispatch({ type: UserActionTypes.RESTORE_USER, data: user });
      } else {
        dispatch({ type: UserActionTypes.SIGN_OUT });
      }
    } catch (e) {
      dispatch({ type: UserActionTypes.SIGN_OUT });
      throw e;
    }
  };
};
