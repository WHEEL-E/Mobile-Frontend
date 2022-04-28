import * as React from "react";
import { useDispatch } from "react-redux";
import { signIn, signOut } from "../store/actions/signIn";
import {
  AuthContextPlaceHolder,
  AuthProviderProps,
  SignInData,
} from "../utilities/types/signInTypes";

const AuthContext = React.createContext(AuthContextPlaceHolder);

export const AuthProvider = (props: AuthProviderProps) => {
  const { children } = props;
  const dispatch = useDispatch();

  const authFunctions = {
    signIn: async (data: SignInData) => {
      dispatch(signIn(data));
    },
    signOut: () => dispatch(signOut()),
    signUp: async (data: SignInData) => {
      dispatch(signIn(data));
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
