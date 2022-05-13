export interface Supervisor {
  userId?: string;
  userName: string;
  profilePhoto: string;
  mail: string;
  phone: string;
  address: string;
}

export interface Patient {
  userId?: string;
  userName: string;
  profilePhoto: string;
  smoking: boolean;
  age: number;
  height: number;
  weight: number;
  gender: "female" | "male";
  mail: string;
  phone: string;
  address: string;
  emergencyContacts: string[];
  healthRecords: string[];
  healthMonitor: object;
}

export interface User {
  mainData: Patient | Supervisor;
  userType: UserTypes;
  token?: string;
}

export enum UserActionTypes {
  SIGN_IN = "SIGN_IN",
  SIGN_OUT = "SIGN_OUT",
  RESTORE_USER = "RESTORE_USER",
}

export enum UserTypes {
  SUPERVISOR = "SUPERVISOR",
  PATIENT = "PATIENT",
}

export interface UserState {
  userData: User | null;
  isLoggedIn: boolean;
  isRestoringData: boolean;
}
