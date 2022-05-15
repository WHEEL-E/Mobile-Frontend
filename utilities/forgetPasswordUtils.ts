import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as ExpoLinking from "expo-linking";
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
