export enum EndPoints {
  Notes = "https://wheel-e.herokuapp.com/api/notes", // You need to change this ip based on your Laptop IP
  Reminders = "http://192.168.1.32:3000/api/reminders",
  patientLogin = "https://wheel--e-default-rtdb.firebaseio.com/users.json",
  supervisorLogin = "https://wheel--e-default-rtdb.firebaseio.com/users.json",
  signUp = "https://wheel--e-default-rtdb.firebaseio.com/users.json",
  forgetPassword = "http://192.168.1.32:3000/api/resetPass",
  searchConnection = "https://wheel-e.herokuapp.com/api/supervisor/search?name=",
  invitations = "https://wheel-e.herokuapp.com/api/invitations",
  associatedUsers = "https://wheel-e.herokuapp.com/api/patients/",
}
