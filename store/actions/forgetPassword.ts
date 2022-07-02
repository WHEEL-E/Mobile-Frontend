import axios from "axios";
import * as ExpoLinking from "expo-linking";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { EndPoints } from "../../utilities/constants/endpoints";
import { ShowModal } from "./errorModal";

export const sendResetEmail = createAsyncThunk(
  "ForgetPasswordActionType.GET_TOKEN",
  async (emailAddress: string, thunkAPI) => {
    try {
      const link = ExpoLinking.createURL("resetPassword");

      const response = await axios.post(`${EndPoints.forgetPassword}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ emailAddress: emailAddress, resetUri: link }),
      });

      if (response.status / 100 !== 2) {
        //TODO: we have two cases: error making the API call, user entering non-existing mailAddress.
        //TODO: we need to handle them both depending on the status code returned
        thunkAPI.dispatch(ShowModal("errorModal.notValidEmail"));
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
      const response = await axios.patch(`${EndPoints.forgetPassword}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.status / 100 !== 2) {
        thunkAPI.dispatch(ShowModal("errorModal.resetPassword"));
        throw new Error("Can't change password");
      }

      return response.data;
    } catch (err) {
      thunkAPI.dispatch(ShowModal("errorModal.resetPassword"));
      throw new Error("Can't change password");
    }
  }
);
