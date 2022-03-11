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
      <Stack.Screen name="GetStarted" component={GetStartedScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="PatientHome" component={PatientHomeScreen} />
      <Stack.Screen
        name="SupervisorHome"
        component={SupervisorHomeScreen}
        options={{ headerTransparent: true, title: "" }}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export default MainNavigator;
