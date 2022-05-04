import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import userReducer from "./user";
import remindersReducer from "./reminders";

const reducers = {
  form: formReducer,
  user: userReducer,
  reminders: remindersReducer,
};

const rootReducer = combineReducers(reducers);
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
