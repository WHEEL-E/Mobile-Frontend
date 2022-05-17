import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import errorModalReducer from "./errorModal";
import notesReducer from "./notes";
import userReducer from "./user";
import remindersReducer from "./reminders";
import addConnectionReducer from "./addConnection";

const reducers = {
  form: formReducer,
  user: userReducer,
  reminders: remindersReducer,
  errorModalReducer: errorModalReducer,
  notes: notesReducer,
  addConnectionReducer: addConnectionReducer,
};

const rootReducer = combineReducers(reducers);
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
