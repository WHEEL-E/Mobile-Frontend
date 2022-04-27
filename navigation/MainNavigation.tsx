import { createStackNavigator } from "@react-navigation/stack";
import AssociatedPatientsScreen from "../screens/AssociatedPatientsScreen";
import FreeDriveScreen from "../screens/FreeDriveScreen";
import HomeScreen from "../screens/HomeScreen";
import PatientHomeScreen from "../screens/PatientHomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import RemindersScreen from "../screens/RemindersScreen";
import SetLanguageScreen from "../screens/SetLanguageScreen";
import SupervisedPatientScreen from "../screens/SupervisedPatientScreen";
import SupervisorHomeScreen from "../screens/SupervisorHomeScreen";
import {
  mainStackOptions,
  MainStackParamList,
} from "../utilities/types/navigationTypes/mainNavigationTypes";

const MainStack = createStackNavigator<MainStackParamList>();

export function MainNavigation() {
  return (
    <MainStack.Navigator screenOptions={mainStackOptions}>
      <MainStack.Screen name="HomeScreen" component={HomeScreen} />
      <MainStack.Screen name="PatientHome" component={PatientHomeScreen} />
      <MainStack.Screen name="Profile" component={ProfileScreen} />
      <MainStack.Screen name="FreeDrive" component={FreeDriveScreen} />
      <MainStack.Screen name="Reminders" component={RemindersScreen} />
      <MainStack.Screen name="ChangeLanguage" component={SetLanguageScreen} />
      <MainStack.Screen
        name="SupervisorHome"
        component={SupervisorHomeScreen}
      />
      <MainStack.Screen
        name="AssociatedPatients"
        component={AssociatedPatientsScreen}
      />
      <MainStack.Screen
        name="SupervisedPatient"
        component={SupervisedPatientScreen}
      />
    </MainStack.Navigator>
  );
}
