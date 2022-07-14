import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Dispatch } from "redux";
import { signIn } from "../../store/actions/user";
import { GetStartedStackParamList } from "./navigationTypes/getStartedNavigationTypes";
import { UserTypes } from "./userTypes";

export interface SignInFormProps {
  navigation: NativeStackNavigationProp<
    GetStartedStackParamList,
    "SignIn",
    undefined
  >;
}

export type SignInData = {
  emailAddress: string;
  password: string;
  type: UserTypes;
  navigation:
    | NativeStackNavigationProp<GetStartedStackParamList, "SignIn", undefined>
    | NativeStackNavigationProp<
        GetStartedStackParamList,
        "MailIsVerififed",
        undefined
      >;
};

export type Context = {
  signIn: (data: any) => Promise<void>;
  signOut: () => void;
  signUp: (data: any) => Promise<void>;
};

export interface AuthProviderProps {
  children: React.ReactNode;
}

export const submitLoginForm = (
  values: SignInData,
  dispatch: Dispatch<any>,
  props: SignInFormProps
) => {
  dispatch(signIn({ ...values, ...props }));
};

export const AuthContextPlaceHolder: Context | undefined = undefined;
