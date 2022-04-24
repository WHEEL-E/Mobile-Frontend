import React, { useEffect } from "react";
import { Path } from "react-native-svg";
import { DEVICE_WIDTH } from "../../../constants/dimentions";
import colors from "../../../constants/colors";
import {
  DriveWheelButtonProps,
  archs,
} from "../../../utilities/driveWheelUtils";
import { Gradientfilling } from "./GradientFilling";
import { View } from "react-native";

const io = require("socket.io-client/dist/socket.io");

export const DriveWheelButton = (props: DriveWheelButtonProps) => {
  const { index, value } = props;
  let socket: any;
  const [color, setColor] = React.useState([
    "url(#GradientFilling)",
    "url(#GradientFilling)",
    "url(#GradientFilling)",
    "url(#GradientFilling)",
  ]);

  useEffect(() => {
    socket = io("http://127.0.0.1:5000", { transports: ["websocket"] });
    socket.on("success", (data: unknown) => console.log(data));
  }, []);

  return (
    <View key={index.toString()}>
      <Gradientfilling />
      <Path
        translateX={DEVICE_WIDTH * 0.45}
        translateY={DEVICE_WIDTH * 0.45}
        d={archs[index]}
        fill={color[index]}
        stroke={colors.offWhite}
        strokeWidth={5}
        onPress={() => {
          console.log(value);
          socket.emit("action", value);
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
