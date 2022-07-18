import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import dataStatusReducer from "./dataStatus";
import notesReducer from "./notes";
import userReducer from "./user";
import remindersReducer from "./reminders";
import SocketReducer from "./socket";
import addConnectionReducer from "./addConnection";
import healthMonitoring from "./healthMonitoring";
import associatedUsersReducer from "./associatedUsers";
import invitationsReducer from "./invitations";
import notificationReducer from "./notifications";
import addressesReducer from "./addresses";

const reducers = {
  form: formReducer,
  user: userReducer,
  reminders: remindersReducer,
  dataStatus: dataStatusReducer,
  notes: notesReducer,
  socket: SocketReducer,
  addConnectionReducer: addConnectionReducer,
  healthMonitoring: healthMonitoring,
  associatedUsers: associatedUsersReducer,
  invitations: invitationsReducer,
  notifications: notificationReducer,
  addressesReducer: addressesReducer,
};

const rootReducer = combineReducers(reducers);
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
