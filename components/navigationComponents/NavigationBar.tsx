import React from "react";
import { StyleSheet, View } from "react-native";
import {
  getProps,
  navigationBarProps,
  NavigationScreens,
} from "../../utilities/navigationUtils/navigationComponentsUtils";
import { NavigationComponent } from "./NavigationComponent";

const NavigationBar = (props: navigationBarProps) => {
  const { navigation, state, testID } = props;

  return (
    <View style={styles.container} testID={testID}>
      {state.routes.map((route, index) => {
        // @ts-ignore
        const label: NavigationScreens = route.name;

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
