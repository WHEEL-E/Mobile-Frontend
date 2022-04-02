import "./lang";
import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator } from "./navigation/MainNavigator";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const reducers = {
  form: formReducer,
};
const reducer = combineReducers(reducers);
const store = createStore(reducer);

const fetchFonts = () => {
  return Font.loadAsync({
    "Cairo-Black": require("./fonts/Cairo-Black.ttf"),
    "Cairo-Bold": require("./fonts/Cairo-Bold.ttf"),
    "Cairo-ExtraBold": require("./fonts/Cairo-ExtraBold.ttf"),
    "Cairo-Light": require("./fonts/Cairo-Light.ttf"),
    "Cairo-Medium": require("./fonts/Cairo-Light.ttf"),
    "Cairo-Regular": require("./fonts/Cairo-Regular.ttf"),
    "Cairo-SemiBold": require("./fonts/Cairo-SemiBold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        // @ts-ignore
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.warn(err)}
      />
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
}
