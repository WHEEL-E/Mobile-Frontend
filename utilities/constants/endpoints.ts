export enum EndPoints {
  Notes = "http://192.168.1.32:3000/api/notes", // You need to change this ip based on your Laptop IP
  Reminders = "http://192.168.1.32:3000/api/reminders",
  patientLogin = "https://wheel--e-default-rtdb.firebaseio.com/users.json",
  supervisorLogin = "https://wheel--e-default-rtdb.firebaseio.com/users.json",
  signUp = "https://wheel--e-default-rtdb.firebaseio.com/users.json",
  forgetPassword = "http://192.168.1.32:3000/api/resetPass",
  searchConnection = "https://fa-search-backend.herokuapp.com/search?delay=true&term=",
  // invitations = "https://wheel-e.herokuapp.com/api/invitations",
  invitations = "http://192.168.14.215/api/invitations",
  sendConnection = "",
  associatedUsers = "https://wheel-e.herokuapp.com/api/patients/",
}
