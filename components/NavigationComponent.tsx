import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export interface navigationComponentProps {
  onPress: () => void;
  iconName: any;
  title: "Home" | "Notes" | "News";
  backgroundColor: string;
  color: string;
}

export const NavigationComponent = (props: navigationComponentProps) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={styles.container}
      testID={props.title}
    >
      <View
        testID="view"
        style={{
          ...styles.iconBackground,
          backgroundColor: props.backgroundColor,
        }}
      >
        <Ionicons
          testID="icon"
          name={props.iconName}
          size={24}
          color={props.color}
        />
      </View>
      <Text testID="text" style={styles.title}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 13,
    fontFamily: "Cairo-Light",
  },
  iconBackground: {
    width: 45,
    height: 45,
    padding: 10,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
