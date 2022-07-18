import axios from "axios";
import * as ExpoLinking from "expo-linking";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { EndPoints } from "../../utilities/constants/endpoints";
import { ShowModal, isLoading, notLoading } from "./dataStatus";

export const sendResetEmail = createAsyncThunk(
  "ForgetPasswordActionType.GET_TOKEN",
  async (emailAddress: string, thunkAPI) => {
    try {
      const link = ExpoLinking.createURL("resetPassword");

      const response = await axios.post(`${EndPoints.forgetPassword}`, {
        emailAddress: emailAddress,
        resetUri: link,
      });

      if (response.data.status !== "Success") {
        thunkAPI.dispatch(ShowModal("An Error occurred"));
        throw new Error(response.statusText);
      }
    } catch (err) {
      thunkAPI.dispatch(ShowModal("errorModal.resetPassword"));
      throw new Error("Can't get token");
    }
  }
);

export const changePassword = createAsyncThunk(
  " ForgetPasswordActionType.CHANGE_PASSWORD",
  async (data: { password: string; token: string }, thunkAPI) => {
    try {
      thunkAPI.dispatch(isLoading());
      const response = await axios.patch(`${EndPoints.forgetPassword}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.data.status !== "Success") {
        thunkAPI.dispatch(ShowModal("An Error occurred"));
        throw new Error(response.statusText);
      }

      thunkAPI.dispatch(notLoading());
      return response.data;
    } catch (err) {
      thunkAPI.dispatch(ShowModal("errorModal.resetPassword"));
      throw new Error("Can't change password");
    }
  }
);
