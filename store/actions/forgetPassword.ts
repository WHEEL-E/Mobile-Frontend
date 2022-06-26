import axios from "axios";
import * as ExpoLinking from "expo-linking";
import { EndPoints } from "../../utilities/constants/endpoints";
import { ShowModal } from "./errorModal";

export const sendResetEmail = async (emailAddress: string, dispatch: any) => {
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
      dispatch(ShowModal("errorModal.notValidEmail"));
    }
  } catch (err) {
    dispatch(ShowModal("errorModal.resetPassword"));
    throw new Error("Can't get token");
  }
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

    return response.data;
  } catch (err) {
    dispatch(ShowModal("errorModal.resetPassword"));
    throw new Error("Can't change password");
  }
};
