export interface VerifyEmailData {
  user_id: string;
  verificationToken: string;
  userType: "Supervisor" | "Patient";
}

export interface sendVerificationEmailData {
  user_id: string;
  email: string;
  userName: string;
}
