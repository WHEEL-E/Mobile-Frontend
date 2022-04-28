import { createStackNavigator } from "@react-navigation/stack";
import GetStartedScreen from "../screens/GetStartedScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import {
  mainStackOptions,
  GetStartedStackParamList,
} from "../utilities/types/navigationTypes/getStartedNavigationTypes";

const GetStartedStack = createStackNavigator<GetStartedStackParamList>();

export function GetStartedNavigation() {
  return (
    <GetStartedStack.Navigator screenOptions={mainStackOptions}>
      <GetStartedStack.Screen name="GetStarted" component={GetStartedScreen} />
      <GetStartedStack.Screen name="SignIn" component={SignInScreen} />
      <GetStartedStack.Screen name="SignUp" component={SignUpScreen} />
    </GetStartedStack.Navigator>
  );
}
