import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { GetStartedStackParamList } from "./navigationTypes/getStartedNavigationTypes";
import { UserTypes } from "./userTypes";

export interface VerifyEmailData {
  user_id: string;
  verificationToken: string;
  userType: "Supervisor" | "Patient";
  signInData: {
    emailAddress: string;
    password: string;
    type: UserTypes;
    navigation: NativeStackNavigationProp<GetStartedStackParamList, any>;
  };
}

export interface sendVerificationEmailData {
  user_id: string;
  email: string;
  userName: string;
}
