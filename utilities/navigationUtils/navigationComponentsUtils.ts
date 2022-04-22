import { BottomTabNavigationEventMap } from "@react-navigation/bottom-tabs";
import { NavigationHelpers, ParamListBase } from "@react-navigation/native";

export interface navigationBarProps {
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
  testID?: string;
}

export interface navigationComponentProps {
  onPress: () => void;
  iconName: any;
  title: "Home" | "Notes" | "News";
  backgroundColor: string;
  color: string;
}

export type navigationScreens = "News" | "Home" | "Notes";
