import qs from "qs";
import { Linking } from "react-native";

const emailBody =
  "Hi there,\n\nThere was a request to change your password!\n\nIf you did not make this request then please ignore this email.\n\nOtherwise, please click this link to change your password: [link]";

export async function sendEmail(to: string, token: string) {
  let url = `mailto:${to}`;

  const query = qs.stringify({
    subject: "Reset your password",
    body: emailBody,
    token: token,
  });

  if (query.length) {
    url += `?${query}`;
  }

  const canOpen = await Linking.canOpenURL(url);

  if (!canOpen) {
    //error modal
    throw new Error("Provided URL can not be handled");
  }

  return Linking.openURL(url);
}

export enum ForgetPasswordActionType {
  GET_TOKEN = "GET_TOKEN",
  SEND_EMAIL = "SEND_EMAIL",
  CHANGE_PASSWORD = "CHANGE_PASSWORD",
}
