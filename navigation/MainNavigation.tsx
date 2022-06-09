import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import AssociatedUsersScreen from "../screens/AssociatedUsersScreen";
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
import AddConnection from "../screens/AddConnectionScreen";
import {
  mainStackOptions,
  MainStackParamList,
} from "../utilities/types/navigationTypes/mainNavigationTypes";
import { UserTypes } from "../utilities/types/userTypes";
import { useTranslation } from "react-i18next";

const MainStack = createStackNavigator<MainStackParamList>();

export function MainNavigation() {
  const { t } = useTranslation();
  const isPatient =
    useSelector((store: RootState) => store.user.userData?.userType) ===
    UserTypes.PATIENT;

  return (
    <MainStack.Navigator
      screenOptions={(props) => mainStackOptions(props.navigation)}
      initialRouteName={isPatient ? "PatientHome" : "SupervisorHome"}
    >
      {isPatient ? (
        <MainStack.Screen
          name="PatientHome"
          component={PatientHomeScreen}
          options={{ title: "" }}
        />
      ) : (
        <MainStack.Screen
          name="SupervisorHome"
          component={SupervisorHomeScreen}
          options={{ title: "" }}
        />
      )}
      <MainStack.Screen name="FreeDrive" component={FreeDriveScreen} />
      <MainStack.Screen
        name="Reminders"
        component={RemindersScreen}
        options={{ title: t("remindersScreen.reminders") }}
      />
      <MainStack.Screen
        name="Settings"
        component={SettingScreen}
        options={{ title: t("screenTitles.settings") }}
      />

      <MainStack.Screen name="SoundSettings" component={SoundSettingScreen} />

      <MainStack.Screen name="Profile" component={ProfileScreen} />
      <MainStack.Screen
        name="ChangeLanguage"
        component={SetLanguageScreen}
        options={{ title: t("screenTitles.language") }}
      />
      <MainStack.Screen
        name="AssociatedUsers"
        component={AssociatedUsersScreen}
        options={{
          title: t("associatedUsers.associatedUsers"),
        }}
      />
      <MainStack.Screen
        name="SupervisedPatient"
        component={SupervisedPatientScreen}
      />
      <MainStack.Screen
        name="AddConnection"
        component={AddConnection}
        options={{
          title: isPatient
            ? t("addConnection.patientTitle")
            : t("addConnection.supervisorTitle"),
        }}
      />
    </MainStack.Navigator>
  );
}
