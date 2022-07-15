import React from "react";
import { StyleSheet, View } from "react-native";
import { Svg } from "react-native-svg";
import { DEVICE_WIDTH } from "../../utilities/constants/dimentions";
import colors from "../../utilities/constants/colors";
import { DriveWheelButton } from "./DriveWheelButton";
import { DriveWheelInnershape } from "./DriveWheelInnershape";

const DriveWheel = () => {
  const buttons = ["d", "w", "a", "s"];

  return (
    <View style={styles.centered}>
      <View style={styles.container}>
        <Svg width="100%" height="100%">
          {buttons.map((value: string, index: number) => (
            <DriveWheelButton
              key={index.toString()}
              value={value}
              index={index}
            />
          ))}
        </Svg>
        <DriveWheelInnershape />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    alignItems: "center",
    alignSelf: "center",
    paddingBottom: "10%",
  },
  container: {
    borderRadius: DEVICE_WIDTH * 0.45,
    width: DEVICE_WIDTH * 0.9,
    height: DEVICE_WIDTH * 0.9,
    backgroundColor: colors.offWhite,
  },
});

export default DriveWheel;
