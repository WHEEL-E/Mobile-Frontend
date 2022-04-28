import "./lang";
import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import reducer from "./store/reducers/rootReducer";
import LoadingScreen from "./screens/LoadingScreen";
import { AuthProvider } from "./context/AuthContext";

const store = createStore(reducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <LoadingScreen />
      </AuthProvider>
    </Provider>
  );
}
