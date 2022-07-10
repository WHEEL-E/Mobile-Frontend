import axios from "axios";
import { Dispatch } from "react";
import * as SecureStore from "expo-secure-store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { SignInData } from "../../utilities/types/signInTypes";
import { EndPoints } from "../../utilities/constants/endpoints";
import { SignUpRequest } from "../../utilities/types/signUpTypes";
import { registerForPushNotificationsAsync } from "../../utilities/signUpUtils";
import {
  PatientExtradata,
  User,
  UserActionTypes,
  UserMainData,
  UserTypes,
} from "../../utilities/types/userTypes";
import { ShowModal, isLoading, notLoading } from "./dataStatus";

export const signIn = createAsyncThunk(
  UserActionTypes.SIGN_IN,
  async (data: SignInData, thunkAPI) => {
    thunkAPI.dispatch(isLoading());
    const response = await axios.post(EndPoints.login, {
      email: data.emailAddress,
      password: data.password,
      role: data.type === UserTypes.PATIENT ? "Patient" : "Supervisor",
    });

    if (response.data.status !== "Success") {
      thunkAPI.dispatch(ShowModal("errorModal.signIn"));
    }

    let user: User;
    if (data.type === UserTypes.SUPERVISOR) {
      const resData: UserMainData & { token: string } = await response.data
        .data;
      user = {
        userMainData: {
          _id: resData._id,
          name: resData.name,
          email: resData.email,
          phone: resData.phone,
          isVerified: resData.isVerified,
          profile_picture: resData.profile_picture,
          gender: resData.gender,
          associatedUsers: resData.associatedUsers,
        },
        userType: data.type,
        token: resData.token,
      };
    } else {
      const resData: UserMainData & PatientExtradata & { token: string } =
        await response.data.data;
      user = {
        userMainData: {
          _id: resData._id,
          name: resData.name,
          email: resData.email,
          phone: resData.phone,
          isVerified: resData.isVerified,
          profile_picture: resData.profile_picture,
          gender: resData.gender,
          associatedUsers: resData.associatedUsers,
        },
        userType: data.type,
        patientExtraData: {
          smoking: resData.smoking,
          address: resData.address,
          dob: resData.dob,
          height: resData.height,
          emergency_number: resData.emergency_number,
          weight: resData.weight,
        },
        token: resData.token,
      };
    }

    try {
      await SecureStore.setItemAsync("userData", JSON.stringify(user));
    } catch (e) {
      console.log(e);
      throw e;
    }
    thunkAPI.dispatch(notLoading());
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
    dispatch(isLoading());
    let notification_token;
    await registerForPushNotificationsAsync(dispatch).then((token) => {
      notification_token = token;
    });

    const { data } = signUpData;
    const sentdata = { ...data, notification_token };

    let endpoint = EndPoints.supervisor;
    if (signUpData.userType === UserTypes.PATIENT) {
      endpoint = EndPoints.patients;
    }

    const response = await axios.post(endpoint, sentdata);

    if (response.data.status !== "Success") {
      dispatch(notLoading());
      throw new Error(response.statusText);
    }

    const signInData: SignInData = {
      emailAddress: data.email,
      password: data.password,
      type: signUpData.userType,
    };

    dispatch(signIn(signInData));
  } catch (e) {
    dispatch(notLoading());
    console.log(e);
    throw e;
  }
};
