import { Dispatch } from "react";
import { LoginData } from "../../utilities/signInUtils";

export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
export const RESTORE_TOKEN = "RESTORE_TOKEN";

export const signIn = (token: string | undefined | null) => {
  return { type: SIGN_IN, token: token };
};

export const restoreToken = (token: string | undefined | null) => {
  return { type: RESTORE_TOKEN, token: token };
};

export const signOut = () => {
  return { type: SIGN_OUT };
};

export const getTokenandSignIn = (data: LoginData) => {
  return async (dispatch: Dispatch<any>) => {
    //here we will add the endpoint for login
    const response = await fetch("", {
      method: "GET",
      body: JSON.stringify({
        loginData: data,
      }),
    });

    const resData = await response.json();
    dispatch(signIn(resData.token));
  };
};
