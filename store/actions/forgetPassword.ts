import axios from "axios";
import * as ExpoLinking from "expo-linking";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { EndPoints } from "../../utilities/constants/endpoints";
import { ShowModal } from "./errorModal";
import { ForgetPasswordActionType } from "../../utilities/forgetPasswordUtils";

export const sendResetEmail = async (emailAddress: string, dispatch: any) => {
  const link = ExpoLinking.createURL("resetPassword");

  const response = await axios.post(
    "https://wheel-e.herokuapp.com/api/invitations",
    {
      from_id: "627ecb1d08d1463ebdeedba7",
      to_id: "627ecb1d08d1463ebdeedba7",
    }
  );

  console.log(response);
};

export const changePassword = async (
  data: { password: string; token: string },
  dispatch: any
) => {
  try {
    const response = await axios.patch(`${EndPoints.forgetPassword}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.status / 100 !== 2) {
      dispatch(ShowModal("errorModal.resetPassword"));
      throw new Error("Can't change password");
    }
  } catch (err) {
    dispatch(ShowModal("errorModal.resetPassword"));
    throw new Error("Can't change password");
  }
};

const a = {
  _id: "62a83bd02bad3535adf96f78",
  from_id: "627ecb1d08d1463ebdeedba7",
  to_id: "627ecb1d08d1463ebdeedba7",
  status: "Pending",
  created_at: "2022-06-14T07:42:08.533Z",
  updated_at: "2022-06-14T07:42:08.533Z",
  __v: 0,
};
