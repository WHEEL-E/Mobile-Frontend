import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as ExpoLinking from "expo-linking";
import { ShowModal } from "../store/actions/dataStatus";
import { changePassword } from "../store/actions/forgetPassword";
import { GetStartedStackParamList } from "./types/navigationTypes/getStartedNavigationTypes";

export enum ForgetPasswordActionType {
  GET_TOKEN = "GET_TOKEN",
  SEND_EMAIL = "SEND_EMAIL",
  CHANGE_PASSWORD = "CHANGE_PASSWORD",
}

export interface ChangedPasswordModalProps {
  modalVisible: boolean;
  setModalVisible: (state: boolean) => void;
  navigation: NativeStackNavigationProp<
    GetStartedStackParamList,
    "SetPassword",
    undefined
  >;
}

export const linking = {
  prefixes: [ExpoLinking.createURL("/")],
  config: {
    screens: {
      SetPassword: {
        path: "resetPassword",
      },
      MailVerification: {
        path: "verifyMail",
      },
    },
  },
};

export const submitResetPasswordHandler = (
  dispatch: any,
  link: string,
  setModalVisible: (state: boolean) => void,
  isValid: { password: boolean; confirmPassword: boolean },
  password: string
) => {
  if (!(isValid.confirmPassword && isValid.password)) {
    return;
  }
  try {
    const token = ExpoLinking.parse(link!).queryParams!.token?.toString()!;

    if (!token) {
      dispatch(ShowModal("errorModal.resetPassword"));
    }

    dispatch(
      changePassword({
        password: password,
        token: token,
      })
    );
  } catch (e) {
    dispatch(ShowModal("errorModal.resetPassword"));
    throw e;
  }
  setModalVisible(true);
};
