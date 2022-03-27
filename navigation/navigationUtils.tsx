import {
  BottomTabNavigationOptions,
  BottomTabScreenProps,
} from "@react-navigation/bottom-tabs";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackNavigationOptions } from "@react-navigation/stack";

export const bottomNavOptions: BottomTabNavigationOptions = {
  headerShown: false,
};

export const mainStackOptions: StackNavigationOptions = { headerShown: false };

export const homeNavOptions: BottomTabNavigationOptions = { title: "Home" };

export type RootStackParamList = {
  GetStarted: undefined;
  Home: undefined;
  Profile: undefined;
  SignIn: undefined;
  SignUp: undefined;
  PatientHome: undefined;
  SupervisorHome: undefined;
  ChangeLanguage: undefined;
  SupervisedPatient: undefined;
  AssociatedPatients: undefined;
  FreeDrive: undefined;
};

export type BottomTabParamList = {
  News: undefined;
  Main: undefined;
  Notes: undefined;
};

export type GetStartedProps = NativeStackScreenProps<
  RootStackParamList,
  "GetStarted"
>;

export type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;

export type ProfileProps = NativeStackScreenProps<
  RootStackParamList,
  "Profile"
>;

export type PatientHomeProps = NativeStackScreenProps<
  RootStackParamList,
  "PatientHome"
>;

export type SupervisorHomeProps = NativeStackScreenProps<
  RootStackParamList,
  "SupervisorHome"
>;

export type SignInProps = NativeStackScreenProps<RootStackParamList, "SignIn">;

export type SignUpProps = NativeStackScreenProps<RootStackParamList, "SignUp">;

export type AssociatedPatientsProps = NativeStackScreenProps<
  RootStackParamList,
  "AssociatedPatients"
>;

export type FreeDriveProps = NativeStackScreenProps<
  RootStackParamList,
  "FreeDrive"
>;

export type NewsProps = BottomTabScreenProps<BottomTabParamList, "News">;

export type MainProps = BottomTabScreenProps<BottomTabParamList, "Main">;

export type NotesProps = BottomTabScreenProps<BottomTabParamList, "Notes">;
export type ChangeLangugageProps = NativeStackScreenProps<
  RootStackParamList,
  "ChangeLanguage"
>;
export type SupervisedPatientProps = NativeStackScreenProps<
  RootStackParamList,
  "SupervisedPatient"
>;
