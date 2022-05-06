import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackNavigationOptions } from "@react-navigation/stack";

export const mainStackOptions: StackNavigationOptions = { headerShown: false };

export type MainStackParamList = {
  HomeScreen: undefined;
  Profile: undefined;
  Settings: undefined;
  SoundSettings: undefined;
  PatientHome: undefined;
  SupervisorHome: undefined;
  ChangeLanguage: undefined;
  SupervisedPatient: undefined;
  AssociatedPatients: undefined;
  Reminders: undefined;
  FreeDrive: undefined;
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
  "AssociatedPatients"
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
