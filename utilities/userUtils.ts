export interface Supervisor {
  username: string;
  profilePhoto: string;
  mail: string;
  phone: string;
  address: string;
}

export interface Patient {
  username: string;
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
  type: UserTypes;
  token: string;
}

export interface Userstate {
  mainData: Patient | Supervisor;
  userType: UserTypes;
}

export enum UserActionTypes {
  STORE_USER = "STORE_USER",
  DELETE_USER = "DELETE_USER",
}

export interface UserAction {
  data?: { mainData: Supervisor | Patient; userType: UserTypes };
  type: UserActionTypes;
}

export enum UserTypes {
  SUPERVISOR = "SUPERVISOR",
  PATIENT = "PATIENT",
}
