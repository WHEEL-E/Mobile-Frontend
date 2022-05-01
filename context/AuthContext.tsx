import * as React from "react";
import { useDispatch } from "react-redux";
import { signIn, signOut, signUp } from "../store/actions/user";
import {
  AuthContextPlaceHolder,
  AuthProviderProps,
  SignInData,
} from "../utilities/types/signInTypes";
import { User } from "../utilities/types/userTypes";

const AuthContext = React.createContext(AuthContextPlaceHolder);

export const AuthProvider = (props: AuthProviderProps) => {
  const { children } = props;
  const dispatch = useDispatch();

  const authFunctions = {
    signIn: async (data: SignInData) => {
      dispatch(signIn(data));
    },
    signOut: () => dispatch(signOut()),
    signUp: async (data: User) => {
      dispatch(signUp(data));
    },
  };

  const authContext = React.useMemo(() => authFunctions, []);

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useSignIn must be used within a signInProvider");
  }
  return context;
}
