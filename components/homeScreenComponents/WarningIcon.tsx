import React from "react";
import Svg, { Path } from "react-native-svg";
import { DEVICE_WIDTH } from "../../utilities/constants/dimentions";

export const WarningIcon = () => {
  return (
    <Svg
      width={DEVICE_WIDTH * 0.3}
      height={DEVICE_WIDTH * 0.3}
      fill="none"
      viewBox="0 0 50 44"
    >
      <Path
        fill="#FFE6A0"
        stroke="#000"
        d="M44.384 43.5H5.616c-3.455 0-5.621-3.733-3.907-6.733L21.093 2.845c1.727-3.023 6.087-3.023 7.814 0l19.384 33.922c1.715 3-.452 6.733-3.907 6.733zm-22.43-9.85v.068a3.045 3.045 0 106.091 0v-.067a3.045 3.045 0 00-6.09 0zm0-15.473v5.225a3.045 3.045 0 106.091 0v-5.225a3.045 3.045 0 00-6.09 0z"
      ></Path>
    </Svg>
  );
};
