import * as SecureStore from "expo-secure-store";
import {
  User,
  UserActionTypes,
  UserTypes,
} from "../../utilities/types/userTypes";
import { SignInData } from "../../utilities/types/signInTypes";
import { ShowModal } from "./errorModal";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { EndPoints } from "../../utilities/constants/endpoints";
import axios from "axios";
import { SignUpRequest } from "../../utilities/types/signUpTypes";
import { Dispatch } from "react";

export const signIn = createAsyncThunk(
  UserActionTypes.SIGN_IN,
  async (data: SignInData, thunkAPI) => {
    const response = await axios.post(EndPoints.login, {
      email: data.emailAddress,
      password: data.password,
      role: data.type === UserTypes.PATIENT ? "Patient" : "Supervisor",
    });

    if (response.data.status !== "Success") {
      thunkAPI.dispatch(ShowModal("errorModal.signIn"));
    }

    const resData = await response.data.data;

    const user: User = {
      userMainData: resData,
      userType: data.type,
      patientExtraData: data.type === UserTypes.PATIENT ? resData : undefined,
    };
    try {
      await SecureStore.setItemAsync("userData", JSON.stringify(user));
    } catch (e) {
      console.log(e);
      throw e;
    }
    return user;
  }
);

export const signOut = createAsyncThunk(
  UserActionTypes.SIGN_OUT,
  async (data: undefined, thunkAPI) => {
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

export const signUp = async (
  signUpData: SignUpRequest,
  dispatch: Dispatch<any>
) => {
  try {
    const { data } = signUpData;
    let endpoint = EndPoints.signUpSupervisor;
    if (signUpData.userType === UserTypes.PATIENT) {
      endpoint = EndPoints.signUpPatient;
    }
    const response = await axios.post(endpoint, data);

    if (response.data.status !== "Success") {
      throw new Error(response.statusText);
    }

    const signInData: SignInData = {
      emailAddress: "mh249688@yahoo.com",
      password: "12345678",
      type: signUpData.userType,
    };

    dispatch(signIn(signInData));
  } catch (e) {
    console.log(e);
    throw e;
  }
};
