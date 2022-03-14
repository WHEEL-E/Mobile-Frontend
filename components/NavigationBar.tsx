import React from "react";
import { StyleSheet, View } from "react-native";
import { BottomTabNavigationEventMap } from "@react-navigation/bottom-tabs";
import { NavigationHelpers, ParamListBase } from "@react-navigation/native";
import { NavigationComponent } from "./NavigationComponent";

interface navigationBarProps {
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
  testID?: string;
}

type navigationScreens = "News" | "Home" | "Notes";

const NavigationBar = (props: navigationBarProps) => {
  const [selected, setSelected] = React.useState("Home");
  const color = (currentTab: navigationScreens) =>
    currentTab === selected ? "white" : "#11698E";
  const backgroundColor = (currentTab: navigationScreens) =>
    currentTab === selected ? "#11698E" : "transparent";

  const pressHandler = (currentTab: navigationScreens) => {
    props.navigation.navigate(currentTab);
    setSelected(currentTab);
  };

  const getProps = (currentTab: navigationScreens) => {
    return {
      onPress: pressHandler.bind(this, currentTab),
      title: currentTab,
      color: color(currentTab),
      backgroundColor: backgroundColor(currentTab),
    };
  };

  return (
    <View style={styles.container} testID={props.testID}>
      <NavigationComponent {...getProps("News")} iconName="notifications" />
      <NavigationComponent {...getProps("Home")} iconName="home" />
      <NavigationComponent {...getProps("Notes")} iconName="document-text" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    alignSelf: "center",
    flexDirection: "row",
    bottom: 10,
  },
  title: {
    fontSize: 27,
    fontFamily: "Cairo-Bold",
  },
});
export default NavigationBar;
