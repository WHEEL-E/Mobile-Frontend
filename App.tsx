import "./lang";
import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { VisibleNavigation } from "./navigation/VisibleNavigation";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { fetchFonts } from "./utilities/fetchFonts";

const reducers = {
  form: formReducer,
};
const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.warn(err)}
      />
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <VisibleNavigation />
      </NavigationContainer>
    </Provider>
  );
}
