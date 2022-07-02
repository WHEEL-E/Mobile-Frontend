import React from "react";
import { useSelector } from "react-redux";
import MailVerificationScreen from "../screens/MailVerification";
import { RootState } from "../store/reducers/rootReducer";
import { GetStartedNavigation } from "./GetStartedNavigation";
import TabsNavigator from "./TabsNavigation";

export function VisibleNavigation() {
  const isVerified = useSelector(
    (store: RootState) => store.user.userData?.userMainData.isVerified
  );

  const isLoggedIn = useSelector((store: RootState) => store.user.isLoggedIn);

  const isAuthenticated = isVerified && isLoggedIn;

  if (!isAuthenticated) {
    return <GetStartedNavigation />;
  }

  if (!isVerified) {
    return <MailVerificationScreen />;
  }

  return <TabsNavigator />;
}
