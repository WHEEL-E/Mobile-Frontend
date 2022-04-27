import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";
import { DEVICE_WIDTH } from "../../utilities/constants/dimentions";

export const DriveWheelInnershape = () => {
  return (
    <LinearGradient
      colors={["#000000", "#000000", "#949494"]}
      style={styles.secondLinearGradient}
    >
      <LinearGradient
        colors={["#949494", "#000000", "#000000"]}
        style={styles.ThirdLinearGradient}
      >
        <LinearGradient
          colors={["#949494", "#000000", "#000000", "#949494"]}
          style={styles.fourthLinearGradient}
        >
          <View style={styles.whiteDot} />
        </LinearGradient>
      </LinearGradient>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  secondLinearGradient: {
    transform: [
      { translateX: DEVICE_WIDTH * 0.15 },
      { translateY: DEVICE_WIDTH * 0.15 },
    ],
    borderRadius: DEVICE_WIDTH * 0.3,
    width: DEVICE_WIDTH * 0.6,
    height: DEVICE_WIDTH * 0.6,
    justifyContent: "center",
    alignItems: "center",
  },
  ThirdLinearGradient: {
    borderRadius: DEVICE_WIDTH * 0.2,
    width: DEVICE_WIDTH * 0.4,
    height: DEVICE_WIDTH * 0.4,
    justifyContent: "center",
    alignItems: "center",
  },
  fourthLinearGradient: {
    borderRadius: DEVICE_WIDTH * 0.1,
    width: DEVICE_WIDTH * 0.2,
    height: DEVICE_WIDTH * 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
  whiteDot: {
    borderRadius: DEVICE_WIDTH * 0.0125,
    width: DEVICE_WIDTH * 0.025,
    height: DEVICE_WIDTH * 0.025,
    backgroundColor: "white",
  },
});
