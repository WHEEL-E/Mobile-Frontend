import { createStackNavigator } from "@react-navigation/stack";

import GetStartedScreen from "../screens/GetStartedScreen";
import HomeScreen from "../screens/HomeScreen";
import PatientHomeScreen from "../screens/PatientHomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import SupervisorHomeScreen from "../screens/SupervisorHomeScreen";
import { RootStackParamList } from "./navigationUtils";

const Stack = createStackNavigator<RootStackParamList>();

function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Get started" component={GetStartedScreen} />
      <Stack.Screen name="Sign in" component={SignInScreen} />
      <Stack.Screen name="Sign up" component={SignUpScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Patient home" component={PatientHomeScreen} />
      <Stack.Screen name="Supervisor Home" component={SupervisorHomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export default MainNavigator;
