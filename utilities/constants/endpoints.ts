export enum EndPoints {
  Notes = "http://192.168.1.32:3000/api/notes", // You need to change this ip based on your Laptop IP
  Reminders = "http://192.168.1.32:3000/api/reminders",
  login = "https://wheel-e.herokuapp.com/api/users/",
  signUpSupervisor = "https://wheel-e.herokuapp.com/api/supervisor",
  signUpPatient = "https://wheel-e.herokuapp.com/api/patients",
  forgetPassword = "http://192.168.1.32:3000/api/resetPass",
  searchConnection = "https://fa-search-backend.herokuapp.com/search?delay=true&term=",
  invitations = "https://wheel-e.herokuapp.com/api/invitations",
  sendConnection = "",
  associatedUsers = "https://wheel-e.herokuapp.com/api/patients/",
}
