import axios from "axios";
import { Dispatch } from "react";
import * as SecureStore from "expo-secure-store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { SignInData } from "../../utilities/types/signInTypes";
import { EndPoints } from "../../utilities/constants/endpoints";
import { registerForPushNotificationsAsync } from "../../utilities/signUpUtils";
import {
  PatientExtradata,
  User,
  UserActionTypes,
  UserMainData,
  UserTypes,
} from "../../utilities/types/userTypes";
import { ShowModal, isLoading, notLoading } from "./dataStatus";

const prepareUserObj = (resData: any, type: UserTypes) => {
  let user: User;
  if (type === UserTypes.SUPERVISOR) {
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
      userType: type,
      token: resData.token,
    };
  } else {
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
      userType: type,
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

  return user;
};

export const signIn = createAsyncThunk(
  UserActionTypes.SIGN_IN,
  async (data: SignInData, thunkAPI) => {
    thunkAPI.dispatch(isLoading());
    const { navigation, emailAddress, password, type } = data;

    const response = await axios.post(EndPoints.login, {
      email: emailAddress,
      password: password,
      role: type === UserTypes.PATIENT ? "Patient" : "Supervisor",
    });

    if (response.data.status !== "Success") {
      thunkAPI.dispatch(ShowModal("errorModal.signIn"));
    }

    const user: User = prepareUserObj(response.data.data, type);

    try {
      await SecureStore.setItemAsync("userData", JSON.stringify(user));
    } catch (e) {
      console.log(e);
      throw e;
    }

    thunkAPI.dispatch(notLoading());

    if (!user.userMainData.isVerified) {
      try {
        navigation.navigate("MailVerification");
      } catch (e) {
        console.log(e);
      }
      console.log("herehere");
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

export const signUp = createAsyncThunk(
  UserActionTypes.SIGN_UP,
  async (data: { formData: FormData; userType: UserTypes }, thunkAPi) => {
    try {
      thunkAPi.dispatch(isLoading());

      const { formData, userType } = data;

      let notification_token: string | undefined;
      await registerForPushNotificationsAsync(thunkAPi.dispatch).then(
        (token) => {
          notification_token = token;
        }
      );

      formData.append("notification_token", `${notification_token}`);

      let endpoint = EndPoints.supervisor;
      if (userType === UserTypes.PATIENT) {
        endpoint = EndPoints.patients;
      }

      const response = await axios.post(endpoint, formData, {
        headers: { "content-type": "multipart/form-data" },
      });

      if (response.data.status !== "Success") {
        thunkAPi.dispatch(notLoading());
        throw new Error(response.statusText);
      }

      const user: User = prepareUserObj(response.data.data, userType);

      return user;
    } catch (e) {
      thunkAPi.dispatch(notLoading());
      console.log(e);
      throw e;
    }
  }
);
