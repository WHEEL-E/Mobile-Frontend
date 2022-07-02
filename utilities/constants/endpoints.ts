export enum EndPoints {
  Notes = "http://192.168.1.115:3000/api/notes", // You need to change this ip based on your Laptop IP
  Reminders = "http://192.168.1.115:3000/api/reminders",
  login = "http://192.168.1.115:3000/api/users/",
  signUpSupervisor = "http://192.168.1.115:3000/api/supervisor",
  signUpPatient = "http://192.168.1.115:3000/api/patients",
  forgetPassword = "http://192.168.1.115:3000/api/resetPass",
  searchConnection = "http://192.168.1.115:3000/api/supervisor/search?name=",
  invitations = "http://192.168.1.115:3000/api/invitations",
  sendConnection = "",
  associatedUsers = "http://192.168.1.115:3000/api/patients/",
  notifications = "http://192.168.1.115:3000/api/notifications",
  mailVerification = "http://192.168.1.115:3000/api/users/verify-mail/",
}
