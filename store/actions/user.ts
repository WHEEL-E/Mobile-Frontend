import { Dispatch } from "redux";
import * as SecureStore from "expo-secure-store";
import {
  User,
  UserActionTypes,
  UserTypes,
} from "../../utilities/types/userTypes";
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
      for (const data in resData) {
        if (resData[data].userType == UserTypes.PATIENT) {
          return resData[data];
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

export const signUp = (data: User) => {
  return async (dispatch: Dispatch<{ type: UserActionTypes; data?: User }>) => {
    const response = await fetch(
      "https://wheel--e-default-rtdb.firebaseio.com/users.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const resData = await response.json();
    dispatch({
      type: UserActionTypes.SIGN_IN,
      data: {
        ...data,
        id: resData.name,
      },
    });
  };
};
