import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import NotificationsScreen from "../screens/NotificationsScreen";
import NotesScreen from "../screens/NotesScreen";
import MainNavigator from "./MainNavigator";
import { bottomNavOptions, homeNavOptions } from "./navigationUtils";

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator screenOptions={bottomNavOptions}>
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
