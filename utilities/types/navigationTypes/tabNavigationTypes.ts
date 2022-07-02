import {
  BottomTabNavigationOptions,
  BottomTabScreenProps,
} from "@react-navigation/bottom-tabs";
import { ScreenNameText } from "../fontTypes";

export const bottomNavOptions: BottomTabNavigationOptions = {
  headerTransparent: true,
  headerShown: true,
  headerTitleAlign: "center",
  headerStyle: {
    height: "10%",
  },
  headerTitleStyle: { ...ScreenNameText, marginTop: "30%" },
};

export type BottomTabParamList = {
  News: undefined;
  Home: undefined;
  Notes: undefined;
};

export type NewsProps = BottomTabScreenProps<BottomTabParamList, "News">;

export type MainProps = BottomTabScreenProps<BottomTabParamList, "Home">;

export type NotesProps = BottomTabScreenProps<BottomTabParamList, "Notes">;
