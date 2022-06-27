import React from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BackButton } from "../../../components/buttons/BackButton";
import { UserMainData, PatientExtradata } from "../userTypes";
import { ScreenNameText } from "../fontTypes";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationOptions } from "@react-navigation/stack";

export const mainStackOptions: (props: {
  route: RouteProp<MainStackParamList, keyof MainStackParamList>;
  navigation: any;
}) => StackNavigationOptions = (navigation: any) => ({
  headerTransparent: true,
  headerShown: true,
  headerTitleAlign: "center",
  headerStyle: {
    height: "10%",
  },
  headerTitleStyle: { ...ScreenNameText, marginTop: "30%" },
  headerBackImage: () => {
    return <BackButton onPress={() => navigation.goBack()} />;
  },
});

export type MainStackParamList = {
  HomeScreen: undefined;
  Profile: undefined;
  Settings: undefined;
  SoundSettings: undefined;
  PatientHome: undefined;
  SupervisorHome: undefined;
  ChangeLanguage: undefined;
  SupervisedPatient: { patientId: string };
  AssociatedUsers: undefined;
  Reminders: { patientId?: string; receiver?: string };
  FreeDrive: undefined;
  AddConnection: undefined;
  HealthMonitoring: undefined;
  SentInvitations: undefined;
};

export type HomeProps = NativeStackScreenProps<
  MainStackParamList,
  "HomeScreen"
>;

export type ProfileProps = NativeStackScreenProps<
  MainStackParamList,
  "Profile"
>;

export type PatientHomeProps = NativeStackScreenProps<
  MainStackParamList,
  "PatientHome"
>;

export type SupervisorHomeProps = NativeStackScreenProps<
  MainStackParamList,
  "SupervisorHome"
>;

export type FreeDriveProps = NativeStackScreenProps<
  MainStackParamList,
  "FreeDrive"
>;

export type AssociatedPatientsProps = NativeStackScreenProps<
  MainStackParamList,
  "AssociatedUsers"
>;

export type RemindersProps = NativeStackScreenProps<
  MainStackParamList,
  "Reminders"
>;

export type ChangeLangugageProps = NativeStackScreenProps<
  MainStackParamList,
  "ChangeLanguage"
>;
export type SupervisedPatientProps = NativeStackScreenProps<
  MainStackParamList,
  "SupervisedPatient"
>;

export type SettingProps = NativeStackScreenProps<
  MainStackParamList,
  "Settings"
>;

export type SoundSettings = NativeStackScreenProps<
  MainStackParamList,
  "SoundSettings"
>;

export type AddConnectionProps = NativeStackScreenProps<
  MainStackParamList,
  "AddConnection"
>;

export type HealthMonitoringProps = NativeStackScreenProps<
  MainStackParamList,
  "HealthMonitoring"
>;

export type SentInvitationsProps = NativeStackScreenProps<
  MainStackParamList,
  "SentInvitations"
>;
