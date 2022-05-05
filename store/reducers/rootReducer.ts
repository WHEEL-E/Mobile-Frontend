import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import errorModalReducer from "./errorModal";
import userReducer from "./user";
import remindersReducer from "./reminders";

const reducers = {
  form: formReducer,
  user: userReducer,
  reminders: remindersReducer,
  errorModalReducer: errorModalReducer,
};

const rootReducer = combineReducers(reducers);
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
