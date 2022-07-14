export interface UserMainData {
  _id?: string;
  name: string;
  password?: string;
  profile_picture: string;
  email: string;
  phone: number;
  gender: "female" | "male";
  isVerified?: boolean;
  associatedUsers: {
    name: string;
    address: string;
    profile_picture: string;
    _id: string;
  }[];
}

export interface PatientExtradata {
  smoking: boolean;
  dob: string;
  height: number;
  weight: number;
  address: string;
  emergency_number: number;
}

export interface User {
  patientExtraData?: PatientExtradata;
  userMainData: UserMainData;
  userType: UserTypes;
  token?: string;
}

export enum UserActionTypes {
  SIGN_IN = "SIGN_IN",
  SIGN_OUT = "SIGN_OUT",
  RESTORE_USER = "RESTORE_USER",
  VERIFY_EMAIL = "VERIFY_EMAIL",
  SIGN_UP = "SIGN_UP",
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
