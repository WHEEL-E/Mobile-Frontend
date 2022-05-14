import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { EndPoints } from "../../utilities/constants/endpoints";
import { ShowModal } from "./errorModal";
import {
  ForgetPasswordActionType,
  sendEmail,
} from "../../utilities/forgetPasswordUtils";

export const getToken = createAsyncThunk(
  ForgetPasswordActionType.GET_TOKEN,
  async (emailAddress: string, thunkAPI) => {
    try {
      const response = await axios.get(
        `${EndPoints.forgetPassword}/${emailAddress}`
      );

      if (response.status % 100 !== 2) {
        //TODO: we have two cases: error making the API call, user entering the wrong password.
        //TODO: we need to handle them both depending on the status code retrned

        thunkAPI.dispatch(ShowModal("errorModal.notValidEmail"));
        throw new Error("not valid email");
      }

      thunkAPI.dispatch(
        sendResetEmail({ emailAddress: emailAddress, token: response.data })
      );
    } catch (err) {
      thunkAPI.dispatch(ShowModal("errorModal.resetPassword"));
      throw err;
    }
  }
);

export const sendResetEmail = createAsyncThunk(
  ForgetPasswordActionType.GET_TOKEN,
  async (data: { emailAddress: string; token: string }, thunkAPI) => {
    try {
      const { emailAddress, token } = data;
      sendEmail(emailAddress, token);
    } catch (err) {
      thunkAPI.dispatch(ShowModal("errorModal.resetPassword"));
      throw new Error("Can't send email");
    }
  }
);

export const changePassword = createAsyncThunk(
  ForgetPasswordActionType.CHANGE_PASSWORD,
  async (data: { password: string; token: string }, thunkAPI) => {
    try {
      const response = await axios.patch(`${EndPoints.forgetPassword}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.status % 100 !== 2) {
        thunkAPI.dispatch(ShowModal("errorModal.changePassword"));
        throw new Error("Can't change password");
      }

      return response.data;
    } catch (err) {
      thunkAPI.dispatch(ShowModal("errorModal.changePassword"));
      throw new Error("Can't change password");
    }
  }
);
