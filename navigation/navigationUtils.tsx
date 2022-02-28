import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export const bottomNavOptions: BottomTabNavigationOptions = {
  headerShown: false,
};

export const homeNavOptions: BottomTabNavigationOptions = { title: "Home" };

export type RootStackParamList = {
  "Get started": undefined;
  Home: undefined;
  Profile: undefined;
  "Sign in": undefined;
  "Sign up": undefined;
  "Patient home": undefined;
  "Supervisor Home": undefined;
};

export type GetStartedProps = NativeStackScreenProps<
  RootStackParamList,
  "Get started"
>;

export type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;

export type ProfileProps = NativeStackScreenProps<
  RootStackParamList,
  "Profile"
>;

export type PatientHomeProps = NativeStackScreenProps<
  RootStackParamList,
  "Patient home"
>;

export type SupervisorHomeProps = NativeStackScreenProps<
  RootStackParamList,
  "Supervisor Home"
>;

export type SignInProps = NativeStackScreenProps<RootStackParamList, "Sign in">;

export type SignUpProps = NativeStackScreenProps<RootStackParamList, "Sign up">;
