import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducers/rootReducer";
import { GetStartedNavigation } from "./GetStartedNavigation";
import TabsNavigator from "./TabsNavigation";

export function VisibleNavigation() {
  const isVerified = useSelector(
    (store: RootState) => store.user.userData?.userMainData.isVerified
  );

  const isLoggedIn = useSelector((store: RootState) => store.user.isLoggedIn);

  if (!isLoggedIn) {
    return <GetStartedNavigation />;
  }

  return <TabsNavigator />;
}
