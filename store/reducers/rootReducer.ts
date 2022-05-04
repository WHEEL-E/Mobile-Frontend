import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import errorModalReducer from "./errorModal";
import userReducer from "./user";

const reducers = {
  form: formReducer,
  user: userReducer,
  errorModalReducer: errorModalReducer,
};

const rootReducer = combineReducers(reducers);
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
