import "./lang";
import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./store/reducers/rootReducer";
import LoadingScreen from "./screens/LoadingScreen";
import { ErrorModal } from "./components/ErrorHandlingComponents/ErrorModal";
import * as Sentry from "sentry-expo";

Sentry.init({
  dsn: "https://83c6d12f11d5428d8b2b7ee38a1d619c@o1224785.ingest.sentry.io/6369936",
  tracesSampleRate: 1.0,
  enableInExpoDevelopment: true,
  debug: true,
});

const store = configureStore({ reducer, middleware: [ReduxThunk] });

function App() {
  return (
    <Provider store={store}>
      <ErrorModal />
      <LoadingScreen />
    </Provider>
  );
}

export default Sentry.Native.wrap(App);
