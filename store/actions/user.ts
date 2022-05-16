import * as SecureStore from "expo-secure-store";
import { User, UserActionTypes } from "../../utilities/types/userTypes";
import { SignInData } from "../../utilities/types/signInTypes";
import { ShowModal } from "./errorModal";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { EndPoints } from "../../utilities/constants/endpoints";

export const signIn = createAsyncThunk(
  UserActionTypes.SIGN_IN,
  async (data: SignInData, thunkAPI) => {
    let endpoint = EndPoints.supervisorLogin;
    if (data.type === "patient") {
      endpoint = EndPoints.patientLogin;
    }

    const response = await fetch(endpoint);

    if (!response.ok) {
      thunkAPI.dispatch(ShowModal("errorModal.signIn"));
    }

    const resData = await response.json();
    const getUser = () => {
      for (const field in resData) {
        if (resData[field].mainData.emailAddress === data.emailAddress) {
          const user: User = resData[field];
          user.mainData.userId = field;
          return user;
        }
      }
      return null;
    };

    const user: User = getUser()!;
    try {
      await SecureStore.setItemAsync("userData", JSON.stringify(user));
    } catch (e) {
      throw e;
    }
    return user;
  }
);

export const signOut = createAsyncThunk(
  UserActionTypes.SIGN_OUT,
  async (data: null, thunkAPI) => {
    try {
      await SecureStore.deleteItemAsync("userData");
    } catch (e) {
      thunkAPI.dispatch(ShowModal("errorModal.signOut"));
      throw e;
    }
  }
);

export const restoreUser = createAsyncThunk(
  UserActionTypes.RESTORE_USER,
  async () => {
    let userData: string | null = null;
    try {
      userData = await SecureStore.getItemAsync("userData");
      if (userData) {
        return JSON.parse(userData);
      } else {
        return null;
      }
    } catch (e) {
      return null;
      throw e;
    }
  }
);

export const signUp = createAsyncThunk(
  UserActionTypes.SIGN_IN,
  async (data: User) => {
    const response = await fetch(EndPoints.signUp, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const resData = await response.json();
    const user = {
      ...data,
      id: resData.name,
    };

    return user;
  }
);
