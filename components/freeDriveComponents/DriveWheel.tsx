import React from "react";
import { StyleSheet, View } from "react-native";
import { Svg } from "react-native-svg";
import { DEVICE_WIDTH } from "../../utilities/constants/dimentions";
import colors from "../../utilities/constants/colors";
import { DriveWheelButton } from "./DriveWheelButton";
import { DriveWheelInnershape } from "./DriveWheelInnershape";

const DriveWheel = () => {
  const buttons = ["right", "up", "left", "down"];

  return (
    <View style={styles.container}>
      <Svg width="100%" height="100%">
        {buttons.map((value: string, index: number) => (
          <DriveWheelButton index={index} value={value} />
        ))}
        <DriveWheelInnershape />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: DEVICE_WIDTH * 0.45,
    width: DEVICE_WIDTH * 0.9,
    height: DEVICE_WIDTH * 0.9,
    backgroundColor: colors.offWhite,
    marginTop: 50,
    marginBottom: 30,
  },
});

export default DriveWheel;
