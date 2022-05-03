export type SignInData = {
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

export const AuthContextPlaceHolder: Context | undefined = undefined;
