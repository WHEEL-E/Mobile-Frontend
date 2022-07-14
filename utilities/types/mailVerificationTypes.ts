import { UserTypes } from "./userTypes";

export interface VerifyEmailData {
  user_id: string;
  verificationToken: string;
  userType: "Supervisor" | "Patient";
  signInData: { emailAddress: string; password: string; type: UserTypes };
}

export interface sendVerificationEmailData {
  user_id: string;
  email: string;
  userName: string;
}
