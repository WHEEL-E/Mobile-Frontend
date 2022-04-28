import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackNavigationOptions } from "@react-navigation/stack";

export const mainStackOptions: StackNavigationOptions = { headerShown: false };

export type GetStartedStackParamList = {
  GetStarted: undefined;
  SignIn: undefined;
  SignUp: undefined;
};

export type SignInProps = NativeStackScreenProps<
  GetStartedStackParamList,
  "SignIn"
>;
export type SignUpProps = NativeStackScreenProps<
  GetStartedStackParamList,
  "SignUp"
>;
export type GetStartedProps = NativeStackScreenProps<
  GetStartedStackParamList,
  "GetStarted"
>;
