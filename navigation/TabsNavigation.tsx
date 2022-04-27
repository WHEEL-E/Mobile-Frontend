import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NotificationsScreen from "../screens/NotificationsScreen";
import NotesScreen from "../screens/NotesScreen";
import { MainNavigation } from "./MainNavigation";
import {
  bottomNavOptions,
  BottomTabParamList,
} from "../utilities/types/navigationTypes/tabNavigationTypes";
import NavigationBar from "../components/navigationComponents/NavigationBar";

const Tab = createBottomTabNavigator<BottomTabParamList>();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={bottomNavOptions}
      tabBar={(props) => (
        <NavigationBar navigation={props.navigation} state={props.state} />
      )}
      initialRouteName="Home"
      backBehavior="history"
    >
      <Tab.Screen name="News" component={NotificationsScreen} />
      <Tab.Screen name="Home" component={MainNavigation} />
      <Tab.Screen name="Notes" component={NotesScreen} />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
