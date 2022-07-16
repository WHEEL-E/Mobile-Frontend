import { Platform } from "react-native";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import { Dispatch } from "react";
import { ShowModal } from "../store/actions/dataStatus";

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
