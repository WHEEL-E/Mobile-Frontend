import { createStackNavigator } from "@react-navigation/stack";
import GetStartedScreen from "../screens/GetStartedScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import {
  mainStackOptions,
  GetStartedStackParamList,
} from "../utilities/types/navigationTypes/getStartedNavigationTypes";
import TabsNavigator from "./TabsNavigation";

const GetStartedStack = createStackNavigator<GetStartedStackParamList>();

export function GetStartedNavigation() {
  return (
    <GetStartedStack.Navigator screenOptions={mainStackOptions}>
      <GetStartedStack.Screen name="GetStarted" component={GetStartedScreen} />
      <GetStartedStack.Screen name="SignIn" component={SignInScreen} />
      <GetStartedStack.Screen name="SignUp" component={SignUpScreen} />
      <GetStartedStack.Screen name="Tabs" component={TabsNavigator} />
    </GetStartedStack.Navigator>
  );
}
