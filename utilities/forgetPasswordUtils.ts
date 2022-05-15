import * as ExpoLinking from "expo-linking";

export enum ForgetPasswordActionType {
  GET_TOKEN = "GET_TOKEN",
  SEND_EMAIL = "SEND_EMAIL",
  CHANGE_PASSWORD = "CHANGE_PASSWORD",
}

export const linking = {
  prefixes: [ExpoLinking.createURL("/"), "wheele://"],
  config: {
    screens: {
      SetPassword: {
        path: "resetPassword",
      },
      GetStarted: {
        path: "getStarted",
      },
    },
  },
};
