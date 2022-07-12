import axios from "axios";
import * as ExpoLinking from "expo-linking";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { EndPoints } from "../../utilities/constants/endpoints";
import { isLoading, notLoading, ShowModal } from "./dataStatus";
import {
  sendVerificationEmailData,
  VerifyEmailData,
} from "../../utilities/types/mailVerificationTypes";
import { Dispatch } from "react";
import { UserActionTypes } from "../../utilities/types/userTypes";

export const sendVerificationEmail = async (
  data: sendVerificationEmailData,
  dispatch: Dispatch<any>
) => {
  try {
    const link = ExpoLinking.createURL("verifyMail");
    const sentData = { ...data, url: link };

    const response = await axios.post(
      `${EndPoints.resendVerification}`,
      sentData
    );

    if (response.data.status !== "Success") {
      dispatch(ShowModal("errorModal.sendVerificationEmail"));
    }
  } catch (err) {
    dispatch(ShowModal("errorModal.sendVerificationEmail"));
    throw new Error("Can't get token");
  }
};

export const verifyEmail = createAsyncThunk(
  UserActionTypes.VERIFY_EMAIL,
  async (data: VerifyEmailData, thunkAPI) => {
    try {
      thunkAPI.dispatch(isLoading());
      const response = await axios.post(`${EndPoints.mailVerification}`, data);

      if (response.data.status !== "Success") {
        thunkAPI.dispatch(ShowModal("errorModal.mailVerification"));
        throw new Error("Can't verify mail");
      }
      thunkAPI.dispatch(notLoading());
      return "Success";
    } catch (err) {
      thunkAPI.dispatch(ShowModal("errorModal.resetPassword"));
      throw new Error("Can't change password");
    }
  }
);
