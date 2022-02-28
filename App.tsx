import React from "react";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
// react-redux , redux is installed
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import AppLoading from "expo-app-loading";

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
    <View style={styles.container}>
      <Text style={styles.title}>Hello Wheel.e!</Text>
      <Ionicons name="heart" size={23} />
      <StatusBar style="auto" />
    </View>
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
