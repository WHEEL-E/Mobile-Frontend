import React, { useState } from "react";
import * as Font from "expo-font";
import { StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import TabsNavigator from "./navigation/TabsNavigation";
// react-redux , redux is installed

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
    <NavigationContainer>
      <TabsNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 27,
    fontFamily: "Cairo-Bold",
  },
});
