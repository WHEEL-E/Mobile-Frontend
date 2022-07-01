import { Platform } from "react-native";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import { UserTypes } from "./types/userTypes";
import { Supervisor } from "../models/supervisor";
import { Patient } from "../models/patient";
import { Dispatch } from "react";
import { signUp } from "../store/actions/user";
import { ShowModal } from "../store/actions/errorModal";
import {
  SignUpAdditionalDataValues,
  signUpMainFormProps,
  signUpMainFormValues,
} from "./types/signUpTypes";

export const registerForPushNotificationsAsync = async (
  dispatch: Dispatch<any>
) => {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      return;
    }

    try {
      token = (await Notifications.getExpoPushTokenAsync()).data;
    } catch (e) {
      throw e;
    }
  } else {
    dispatch(ShowModal("Must use physical device for Push Notifications"));
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.DEFAULT,
    });
  }
  return token;
};

export const submitSignUpMainForm = (
  values: signUpMainFormValues,
  dispatch: any,
  props: signUpMainFormProps
) => {
  const { setScreen } = props;
  const { type } = values;

  if (type === UserTypes.SUPERVISOR) {
    Supervisor.addMainFormData(values);
    const user = Supervisor.prepareUserObject();
    dispatch(signUp(user));
  } else {
    Patient.addMainFormData(values);
    setScreen("SecondPage");
  }
};

export const submitSignUpAdditionalData = (
  values: SignUpAdditionalDataValues,
  dispatch: Dispatch<any>
) => {
  Patient.addAdditionalFormData(values);
  const user = Patient.prepareUserObject();
  dispatch(signUp(user));
};
