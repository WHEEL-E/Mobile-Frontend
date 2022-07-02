import React from "react";
import { StyleSheet, View } from "react-native";
import {
  getProps,
  navigationBarProps,
  NavigationScreens,
} from "../../utilities/types/navigationTypes/navigationComponentsTypes";
import { NavigationComponent } from "./NavigationComponent";

const NavigationBar = (props: navigationBarProps) => {
  const { navigation, state, testID } = props;

  return (
    <View style={styles.container} testID={testID}>
      {state.routes.map((route, index) => {
        const label: NavigationScreens = route.name as NavigationScreens;

        return (
          <NavigationComponent
            {...getProps(label, index, state, navigation)}
            key={index.toString()}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    position: "absolute",
    flexDirection: "row",
    bottom: "2%",
  },
});
export default NavigationBar;
