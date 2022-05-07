import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import errorModalReducer from "./errorModal";
import notesReducer from "./notes";
import userReducer from "./user";

const reducers = {
  form: formReducer,
  user: userReducer,
  errorModalReducer: errorModalReducer,
  notes: notesReducer,
};

const rootReducer = combineReducers(reducers);
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
