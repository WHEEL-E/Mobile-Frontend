import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { SignInData } from "../../utilities/types/signInTypes";
import { EndPoints } from "../../utilities/constants/endpoints";
import { registerForPushNotificationsAsync } from "../../utilities/notificationUtils";
import {
  User,
  UserActionTypes,
  UserTypes,
} from "../../utilities/types/userTypes";
import { ShowModal, isLoading, notLoading } from "./dataStatus";
import { ProfileProps } from "../../utilities/types/navigationTypes/mainNavigationTypes";
import { RootState } from "../reducers/rootReducer";
import { ProfileValues } from "../../components/profileComponents/MainForm";

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
        password: resData.password,
      },
      userType: type,
      token: resData.token,
    };
  } else {
    user = {
      userMainData: {
        password: resData.password,
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
      email: emailAddress.toLowerCase(),
      password: password,
      role: type,
    });

    if (response.data.status !== "Success") {
      thunkAPI.dispatch(ShowModal("errorModal.signIn"));
    }

    const user: User = prepareUserObj(response.data.data, type);

    try {
      await SecureStore.setItemAsync("userData", JSON.stringify(user));
    } catch (e) {
      throw e;
    }

    thunkAPI.dispatch(notLoading());

    // if (!user.userMainData.isVerified) {
    //   try {
    //     navigation.navigate("MailVerification");
    //   } catch (e) {
    //     console.log(e);
    //   }
    // }
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
      throw e;
    }
  }
);

export const updateUser = createAsyncThunk(
  UserActionTypes.UPDATE,
  async (data: { mainData: ProfileValues; userType: UserTypes }, thunkAPi) => {
    try {
      const { user } = thunkAPi.getState() as RootState;
      const { mainData, userType } = data;

      let sentData: object = { ...mainData };

      let endpoint = `${EndPoints.supervisor}/${user.userData?.userMainData._id}`;
      if (userType === UserTypes.PATIENT) {
        endpoint = `${EndPoints.patients}/${user.userData?.userMainData._id}`;
        sentData = {
          ...sentData,
          password: user.userData?.userMainData.password!,
          gender: user.userData?.userMainData.gender,
          dob: user.userData?.patientExtraData?.dob,
          patient_name: mainData.name,
          smoking: mainData.smoking?.toString(),
        };
      }

      const response = await axios.put(endpoint, sentData, {
        headers: {
          token: user.userData?.token!,
        },
      });

      if (response.data.status !== "Success") {
        throw new Error(response.statusText);
      }

      const returnUser: User = prepareUserObj(response.data.data, userType);
      console.log(returnUser, response.data.data);
      return returnUser;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
);
