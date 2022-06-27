import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import errorModalReducer from "./errorModal";
import notesReducer from "./notes";
import userReducer from "./user";
import remindersReducer from "./reminders";
import addConnectionReducer from "./addConnection";
import healthMonitoring from "./healthMonitoring";
import associatedUsersReducer from "./associatedUsers";
import invitationsReducer from "./invitations";

const reducers = {
  form: formReducer,
  user: userReducer,
  reminders: remindersReducer,
  errorModalReducer: errorModalReducer,
  notes: notesReducer,
  addConnectionReducer: addConnectionReducer,
  healthMonitoring: healthMonitoring,
  associatedUsers: associatedUsersReducer,
  invitations: invitationsReducer,
};

const rootReducer = combineReducers(reducers);
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
