import "./lang";
import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import reducer from "./store/reducers/rootReducer";
import LoadingScreen from "./screens/LoadingScreen";
import { AuthProvider } from "./context/AuthContext";
import { ErrorModal } from "./components/ErrorHandlingComponents/ErrorModal";
import * as Sentry from "sentry-expo";

Sentry.init({
  dsn: "https://83c6d12f11d5428d8b2b7ee38a1d619c@o1224785.ingest.sentry.io/6369936",
  tracesSampleRate: 1.0,
  enableInExpoDevelopment: true,
  debug: true,
});

const store = createStore(reducer, applyMiddleware(ReduxThunk));
function App() {
  return (
    <Provider store={store}>
      <ErrorModal />
      <AuthProvider>
        <LoadingScreen />
      </AuthProvider>
    </Provider>
  );
}

export default Sentry.Native.wrap(App);
