import React from "react";
import { StyleSheet, View } from "react-native";
import { BottomTabNavigationEventMap } from "@react-navigation/bottom-tabs";
import { NavigationHelpers, ParamListBase } from "@react-navigation/native";
import NavigationComponent from "./NavigationComponent";

interface navigationBarProps {
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

const NavigationBar = (props: navigationBarProps) => {
  const [selected, setSelected] = React.useState("Home");
  const color = (currentTab: string) =>
    currentTab === selected ? "white" : "#11698E";
  const backgroundColor = (currentTab: string) =>
    currentTab === selected ? "#11698E" : "transparent";

  return (
    <View style={styles.container}>
      <NavigationComponent
        onPress={() => {
          props.navigation.navigate("News");
          setSelected("News");
        }}
        title="News"
        iconName="notifications"
        color={color("News")}
        backgroundColor={backgroundColor("News")}
      />
      <NavigationComponent
        onPress={() => {
          props.navigation.navigate("Main");
          setSelected("Home");
        }}
        title="Home"
        iconName="home"
        color={color("Home")}
        backgroundColor={backgroundColor("Home")}
      />
      <NavigationComponent
        onPress={() => {
          props.navigation.navigate("Notes");
          setSelected("Notes");
        }}
        title="Notes"
        iconName="document-text"
        color={color("Notes")}
        backgroundColor={backgroundColor("Notes")}
      />
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
