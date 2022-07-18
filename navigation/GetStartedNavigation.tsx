import { createStackNavigator } from "@react-navigation/stack";
import { ForgetPasswordScreen } from "../screens/ForgetPasswordScreen";
import GetStartedScreen from "../screens/GetStartedScreen";
import MailIsVerififedScreen from "../screens/MailIsVerififed";
import MailVerificationScreen from "../screens/MailVerification";
import { SetPasswordScreen } from "../screens/SetPasswordScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import {
  mainStackOptions,
  GetStartedStackParamList,
} from "../utilities/types/navigationTypes/getStartedNavigationTypes";

const GetStartedStack = createStackNavigator<GetStartedStackParamList>();

export function GetStartedNavigation() {
  return (
    <GetStartedStack.Navigator
      screenOptions={(props) => mainStackOptions(props.navigation)}
    >
      <GetStartedStack.Screen name="GetStarted" component={GetStartedScreen} />
      <GetStartedStack.Screen name="SignIn" component={SignInScreen} />
      <GetStartedStack.Screen name="SignUp" component={SignUpScreen} />
      <GetStartedStack.Screen
        name="ForgetPassword"
        component={ForgetPasswordScreen}
      />
      <GetStartedStack.Screen
        name="SetPassword"
        component={SetPasswordScreen}
      />
      <GetStartedStack.Screen
        name="MailVerification"
        component={MailVerificationScreen}
      />
      <GetStartedStack.Screen
        name="MailIsVerififed"
        component={MailIsVerififedScreen}
      />
    </GetStartedStack.Navigator>
  );
}
