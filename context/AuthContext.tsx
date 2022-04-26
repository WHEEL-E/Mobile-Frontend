import * as React from "react";
import { useDispatch } from "react-redux";
import { getTokenandSignIn, signOut } from "../store/actions/signIn";
import {
  AuthContextPlaceHolder,
  AuthProviderProps,
  encryptPassword,
  LoginData,
} from "../utilities/signInUtils";

const AuthContext = React.createContext(AuthContextPlaceHolder);

export const AuthProvider = (props: AuthProviderProps) => {
  const { children } = props;
  const dispatch = useDispatch();

  const authFunctions = {
    signIn: async (data: LoginData) => {
      const signIndata = { ...data };
      signIndata.password = encryptPassword(signIndata.password);
      dispatch(getTokenandSignIn(signIndata));
    },
    signOut: () => dispatch(signOut()),
    signUp: async (data: LoginData) => {
      const signIndata = { ...data };
      signIndata.password = encryptPassword(signIndata.password);
      dispatch(getTokenandSignIn(signIndata));
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
