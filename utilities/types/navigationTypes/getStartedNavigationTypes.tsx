import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackNavigationOptions } from "@react-navigation/stack";
import { BackButton } from "../../../components/buttons/BackButton";

export const mainStackOptions: (props: {
  route: any;
  navigation: any;
}) => StackNavigationOptions = (navigation: any) => ({
  headerTransparent: true,
  headerShown: true,
  headerTitleAlign: "center",
  headerStyle: {
    height: "10%",
  },
  title: "",
  headerBackImage: () => {
    return <BackButton onPress={() => navigation.goBack()} />;
  },
});

export type GetStartedStackParamList = {
  GetStarted: undefined;
  SignIn: undefined;
  SignUp: undefined;
  ForgetPassword: undefined;
  SetPassword: { token: string };
  MailVerification: undefined;
  MailIsVerififed: { token: string };
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
export type ForgetPasswordProps = NativeStackScreenProps<
  GetStartedStackParamList,
  "ForgetPassword"
>;
export type SetPasswordProps = NativeStackScreenProps<
  GetStartedStackParamList,
  "SetPassword"
>;
export type MailVerificationProps = NativeStackScreenProps<
  GetStartedStackParamList,
  "MailVerification"
>;

export type MailIsVerififedProps = NativeStackScreenProps<
  GetStartedStackParamList,
  "MailIsVerififed"
>;
