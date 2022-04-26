import { Dispatch } from "react";
import * as SecureStore from "expo-secure-store";
import { AuthActionTypes, LoginData } from "../../utilities/signInUtils";
import { deleteUser, restoreUser, storeUser } from "./user";
import { User } from "../../utilities/userUtils";

export const signIn = (token: string | undefined | null) => {
  if (token) {
    return async (dispatch: Dispatch<any>) => {
      try {
        await SecureStore.setItemAsync("userToken", token);
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: AuthActionTypes.SIGN_IN });
    };
  }
};

export const restoreToken = () => {
  return async (dispatch: Dispatch<any>) => {
    let userToken;
    try {
      userToken = await SecureStore.getItemAsync("userToken");
    } catch (e) {
      console.log(e);
    }
    dispatch({
      type: AuthActionTypes.RESTORE_TOKEN,
      isSignedOut: userToken ? false : true,
    });
    dispatch(restoreUser());
  };
};

export const signOut = () => {
  return async (dispatch: Dispatch<any>) => {
    try {
      await SecureStore.deleteItemAsync("userToken");
    } catch (e) {
      console.log(e);
    }
    dispatch({ type: AuthActionTypes.SIGN_OUT });
    dispatch(deleteUser());
  };
};

export const getTokenandSignIn = (data: LoginData) => {
  return async (dispatch: Dispatch<any>) => {
    // Here we will add the endpoint for login
    // The logic will change since the endpoint will return only one user

    const response = await fetch(
      "https://wheel--e-default-rtdb.firebaseio.com/users.json"
    );
    const resData = await response.json();
    const getUser = () => {
      for (const data in resData) {
        if (resData[data].type == "patient") {
          return resData[data];
        }
      }
    };
    const user: User = getUser();
    dispatch(signIn(user.token));
    dispatch(storeUser(user.mainData, user.type));
  };
};
