export type LoginData = {
  emailAddress: string;
  password: string;
};

export type Context = {
  signIn: (data: any) => Promise<void>;
  signOut: () => () => {
    type: string;
  };
  signUp: (data: any) => Promise<void>;
};

export interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContextPlaceHolder: Context = {
  signIn: async () => {},
  signUp: async () => {},
  signOut: () => {
    return () => {
      return { type: "string" };
    };
  },
};

export interface AuthState {
  isLoading: boolean;
  isSignOut: boolean;
  userToken: string | undefined;
}

export enum ActionTypes {
  SIGN_IN = "SIGN_IN",
  SIGN_OUT = "SIGN_OUT",
  RESTORE_TOKEN = "RESTORE_TOKEN",
}

export interface AuthAction {
  type: ActionTypes;
  token?: string;
}
