import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NotificationsScreen from "../screens/NotificationsScreen";
import NotesScreen from "../screens/NotesScreen";
import { SecondaryNavigator } from "./MainNavigator";
import {
  bottomNavOptions,
  BottomTabParamList,
  homeNavOptions,
} from "./navigationUtils";
import NavigationBar from "../components/navigationComponents/NavigationBar";

const Tab = createBottomTabNavigator<BottomTabParamList>();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={bottomNavOptions}
      tabBar={(props) => <NavigationBar navigation={props.navigation} />}
      initialRouteName="Main"
    >
      <Tab.Screen name="News" component={NotificationsScreen} />
      <Tab.Screen
        name="Main"
        component={SecondaryNavigator}
        options={homeNavOptions}
      />
      <Tab.Screen name="Notes" component={NotesScreen} />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
