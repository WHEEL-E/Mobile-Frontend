import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import signInReducer from "./signIn";
import userReducer from "./user";

const reducers = {
  form: formReducer,
  signIn: signInReducer,
  user: userReducer,
};

const rootReducer = combineReducers(reducers);
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
