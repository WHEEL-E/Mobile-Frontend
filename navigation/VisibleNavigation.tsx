import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducers/rootReducer";
import { GetStartedNavigation } from "./GetStartedNavigation";
import TabsNavigator from "./TabsNavigation";

export function VisibleNavigation() {
  if (!useSelector((store: RootState) => store.user.isLoggedIn)) {
    return <GetStartedNavigation />;
  }

  return <TabsNavigator />;
}
