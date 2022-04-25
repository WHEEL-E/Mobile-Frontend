import "./lang";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./store/reducers/rootReducer";
import LoadingScreen from "./screens/LoadingScreen";
import { AuthProvider } from "./context/AuthContext";

const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <LoadingScreen />
      </AuthProvider>
    </Provider>
  );
}
