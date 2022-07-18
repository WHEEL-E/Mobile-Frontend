export enum EndPoints {
  Notes = "http://18.134.95.141/api/notes", // You need to change this ip based on your Laptop IP
  Reminders = "http://18.134.95.141/api/reminders",
  login = "http://18.134.95.141/api/users/",
  supervisor = "http://18.134.95.141/api/supervisor",
  patients = "http://18.134.95.141/api/patients",
  forgetPassword = "http://18.134.95.141/api/resetPassword",
  searchConnection = "http://18.134.95.141/api/supervisor/search?name=",
  invitations = "http://18.134.95.141/api/invitations",
  sendConnection = "",
  associatedUsers = "http://18.134.95.141/api/patients/",
  notifications = "http://18.134.95.141/api/notifications",
  mailVerification = "http://18.134.95.141/api/users/verify-mail/",
  resendVerification = "http://18.134.95.141/api/users/resend-verification-mail/",
}
