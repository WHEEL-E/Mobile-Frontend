import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import signInReducer from "./signIn";

const reducers = {
  form: formReducer,
  user: signInReducer,
};

const rootReducer = combineReducers(reducers);
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
