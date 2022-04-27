import { BottomTabNavigationEventMap } from "@react-navigation/bottom-tabs";
import {
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
} from "@react-navigation/native";

export interface navigationBarProps {
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
  state: TabNavigationState<ParamListBase>;
  testID?: string;
}

export interface navigationComponentProps {
  iconName: any;
  title: NavigationScreens;
  isFocused: boolean;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

const iconNames = {
  News: "notifications",
  Home: "home",
  Notes: "document-text",
};

export const getProps = (
  currentTab: NavigationScreens,
  index: number,
  state: TabNavigationState<ParamListBase>,
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>
): navigationComponentProps => {
  return {
    title: currentTab,
    iconName: iconNames[currentTab],
    isFocused: state.index === index,
    navigation: navigation,
  };
};

export type NavigationScreens = "News" | "Home" | "Notes";
