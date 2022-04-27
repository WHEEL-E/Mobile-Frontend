import {
  BottomTabNavigationOptions,
  BottomTabScreenProps,
} from "@react-navigation/bottom-tabs";

export const bottomNavOptions: BottomTabNavigationOptions = {
  headerShown: false,
};

export type BottomTabParamList = {
  News: undefined;
  Home: undefined;
  Notes: undefined;
};

export type NewsProps = BottomTabScreenProps<BottomTabParamList, "News">;

export type MainProps = BottomTabScreenProps<BottomTabParamList, "Home">;

export type NotesProps = BottomTabScreenProps<BottomTabParamList, "Notes">;
