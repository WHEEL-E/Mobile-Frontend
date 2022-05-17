import { Dispatch } from "redux";
import { signIn } from "../../store/actions/user";
import { UserTypes } from "./userTypes";

export type SignInData = {
  emailAddress: string;
  password: string;
  type: UserTypes;
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
  dispatch: Dispatch<any>
) => {
  dispatch(signIn(values));
};

export const AuthContextPlaceHolder: Context | undefined = undefined;
