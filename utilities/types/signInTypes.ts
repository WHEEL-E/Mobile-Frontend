import { Base64 } from "js-base64";

export type LoginData = {
  emailAddress: string;
  password: string;
};

export type Context = {
  signIn: (data: any) => Promise<void>;
  signOut: () => void;
  signUp: (data: any) => Promise<void>;
};

export interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContextPlaceHolder: Context = {
  signIn: async () => {},
  signUp: async () => {},
  signOut: () => {},
};

export interface AuthState {
  isLoading: boolean;
  isSignOut: boolean;
}

export enum AuthActionTypes {
  SIGN_IN = "SIGN_IN",
  SIGN_OUT = "SIGN_OUT",
  RESTORE_TOKEN = "RESTORE_TOKEN",
}

export interface AuthAction {
  type: AuthActionTypes;
  isSignedOut: boolean;
  data?: LoginData;
}

export const encryptPassword = (text: string) => {
  const encryptedPassword = Base64.encode(text);
  return encryptedPassword;
};

export const decryptPassword = (text: string) => {
  const decryptedPassword = Base64.decode(text);
  return decryptedPassword;
};
