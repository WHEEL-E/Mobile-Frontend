import { GetStartedNavigation } from "./GetStartedNavigation";
import TabsNavigator from "./TabsNavigation";

const isSignedIn = true;

export const VisibleNavigation = isSignedIn
  ? TabsNavigator
  : GetStartedNavigation;
