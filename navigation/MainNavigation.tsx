import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import AssociatedPatientsScreen from "../screens/AssociatedPatientsScreen";
import FreeDriveScreen from "../screens/FreeDriveScreen";
import PatientHomeScreen from "../screens/PatientHomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import RemindersScreen from "../screens/RemindersScreen";
import SetLanguageScreen from "../screens/SetLanguageScreen";
import SupervisedPatientScreen from "../screens/SupervisedPatientScreen";
import SupervisorHomeScreen from "../screens/SupervisorHomeScreen";
import { RootState } from "../store/reducers/rootReducer";
import SettingScreen from "../screens/SettingScreen";
import SoundSettingScreen from "../screens/SoundSettingScreen";
import {
  mainStackOptions,
  MainStackParamList,
} from "../utilities/types/navigationTypes/mainNavigationTypes";
import { UserTypes } from "../utilities/types/userTypes";

const MainStack = createStackNavigator<MainStackParamList>();

export function MainNavigation() {
  const isPatient =
    useSelector((store: RootState) => store.user.userData?.userType) ===
    UserTypes.PATIENT;

  const generalOptions: any = {
    headerTransparent: true,
    headerShown: true,
    headerTitleAlign: "center",
  };

  return (
    <MainStack.Navigator
      screenOptions={mainStackOptions}
      initialRouteName={isPatient ? "PatientHome" : "SupervisorHome"}
    >
      {isPatient ? (
        <MainStack.Screen name="PatientHome" component={PatientHomeScreen} />
      ) : (
        <MainStack.Screen
          name="SupervisorHome"
          component={SupervisorHomeScreen}
        />
      )}
      <MainStack.Screen name="FreeDrive" component={FreeDriveScreen} />
      <MainStack.Screen name="Reminders" component={RemindersScreen} />
      <MainStack.Screen
        name="Settings"
        component={SettingScreen}
        options={generalOptions}
      />

      <MainStack.Screen
        name="SoundSettings"
        component={SoundSettingScreen}
        options={generalOptions}
      />

      <MainStack.Screen name="Profile" component={ProfileScreen} />
      <MainStack.Screen name="ChangeLanguage" component={SetLanguageScreen} />
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
