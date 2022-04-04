import React from "react";
import { Path } from "react-native-svg";
import { DEVICE_WIDTH } from "../../../constants/dimentions";
import colors from "../../../constants/colors";
import {
  DriveWheelButtonProps,
  path,
} from "../../../utilities/driveWheelUtils";
import { Gradientfilling } from "./GradientFilling";
import { View } from "react-native";

export const DriveWheelButtons = (props: DriveWheelButtonProps) => {
  const { index, value } = props;
  const [color, setColor] = React.useState([
    "url(#GradientFilling)",
    "url(#GradientFilling)",
    "url(#GradientFilling)",
    "url(#GradientFilling)",
  ]);

  return (
    <View>
      <Gradientfilling />
      <Path
        key={index}
        translateX={DEVICE_WIDTH * 0.45}
        translateY={DEVICE_WIDTH * 0.45}
        d={path[index]}
        fill={color[index]}
        stroke={colors.offWhite}
        strokeWidth={5}
        onPress={() => {
          console.log(value);
        }}
        onPressIn={() => {
          const newColors = [...color];
          newColors[index] = "white";
          setColor(newColors);
        }}
        onPressOut={() => {
          const newColors = [...color];
          newColors[index] = "url(#GradientFilling)";
          setColor(newColors);
        }}
      />
    </View>
  );
};
