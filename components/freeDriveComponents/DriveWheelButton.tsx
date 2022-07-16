import React from "react";
import { Path } from "react-native-svg";
import { DEVICE_WIDTH } from "../../utilities/constants/dimentions";
import colors from "../../utilities/constants/colors";
import { DriveWheelButtonProps, archs } from "../../utilities/driveWheelUtils";
import { Gradientfilling } from "./GradientFilling";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers/rootReducer";
import { Socket } from "socket.io-client";

export const DriveWheelButton = (props: DriveWheelButtonProps) => {
  const { index, value } = props;
  const [color, setColor] = React.useState([
    "url(#GradientFilling)",
    "url(#GradientFilling)",
    "url(#GradientFilling)",
    "url(#GradientFilling)",
  ]);
  const socket = useSelector(
    (state: RootState) => state.healthMonitoring.socket
  ) as Socket;

  return (
    <View>
      <Gradientfilling />
      <Path
        translateX={DEVICE_WIDTH * 0.45}
        translateY={DEVICE_WIDTH * 0.45}
        d={archs[index]}
        fill={color[index]}
        stroke={colors.offWhite}
        strokeWidth={5}
        onPressIn={() => {
          const newColors = [...color];
          newColors[index] = "white";
          socket.emit("action", value);
          setColor(newColors);
        }}
        onPressOut={() => {
          const newColors = [...color];
          newColors[index] = "url(#GradientFilling)";
          socket.emit("action-stop", "o");
          setColor(newColors);
        }}
      />
    </View>
  );
};
