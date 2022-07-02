import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../../utilities/constants/colors";
import {
  DEVICE_HEIGHT,
  DEVICE_WIDTH,
} from "../../utilities/constants/dimentions";
import { BIG_MARGIN_VERTICAL } from "../../utilities/constants/spacing";
import { ImportantText, TitleText } from "../../utilities/types/fontTypes";
import { SensorCardProps } from "../../utilities/types/healthStatusTypes";

export const SensorCard = (props: SensorCardProps) => {
  const {
    sensor: { image, sensorName, value, unit },
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Image source={image} style={styles.image} resizeMode="center" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{sensorName}</Text>
        <Text style={styles.value}>
          {value} {unit}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    flexDirection: "row",
    marginVertical: BIG_MARGIN_VERTICAL,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  circle: {
    width: DEVICE_WIDTH * 0.3,
    height: DEVICE_WIDTH * 0.3,
    borderRadius: DEVICE_WIDTH * 0.2,
    backgroundColor: colors.lightPurple,
    borderColor: colors.darkPurple,
    borderWidth: DEVICE_WIDTH * 0.01,
    shadowOffset: { width: DEVICE_WIDTH * 0.2, height: DEVICE_WIDTH * 0.2 },
    shadowOpacity: 0.8,
    shadowColor: "black",
    shadowRadius: DEVICE_WIDTH * 0.2,
    elevation: DEVICE_HEIGHT * 0.015,
    overflow: "hidden",
  },
  image: { width: "100%", height: "100%" },
  textContainer: {
    width: DEVICE_WIDTH * 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  title: { ...ImportantText },
  value: { ...TitleText },
});
