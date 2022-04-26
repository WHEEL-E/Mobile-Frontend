import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducers/rootReducer";
import { GetStartedNavigation } from "./GetStartedNavigation";
import TabsNavigator from "./TabsNavigation";

export function VisibleNavigation() {
  const isSignedIn = !useSelector((store: RootState) => store.signIn.isSignOut);

  return isSignedIn ? <TabsNavigator /> : <GetStartedNavigation />;
}
