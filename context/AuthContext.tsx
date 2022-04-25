import * as React from "react";
import { useDispatch } from "react-redux";
import { signIn, signOut } from "../store/actions/signIn";
import {
  AuthContextPlaceHolder,
  AuthProviderProps,
  Context,
  LoginData,
} from "../utilities/signInUtils";

const AuthContext = React.createContext(AuthContextPlaceHolder);

export const AuthProvider = (props: AuthProviderProps) => {
  const { children } = props;
  const dispatch = useDispatch();

  const authFunctions = {
    signIn: async (data: LoginData) => {
      //hit the DB to make sure the email and pass are correct and receive the token
      dispatch(signIn("dummy-auth-token"));
    },
    signOut: () => dispatch(signOut),
    signUp: async (data: LoginData) => {
      dispatch(signIn("dummy-auth-token"));
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
