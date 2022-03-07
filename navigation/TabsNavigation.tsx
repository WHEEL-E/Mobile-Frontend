import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NotificationsScreen from "../screens/NotificationsScreen";
import NotesScreen from "../screens/NotesScreen";
import MainNavigator from "./MainNavigator";
import {
  bottomNavOptions,
  BottomTabParamList,
  homeNavOptions,
} from "./navigationUtils";
import NavigationBar from "../components/NavigationBar";

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
        component={MainNavigator}
        options={homeNavOptions}
      />
      <Tab.Screen name="Notes" component={NotesScreen} />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
