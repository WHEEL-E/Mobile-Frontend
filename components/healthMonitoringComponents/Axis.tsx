import React from "react";
import { View } from "react-native";
import { Path } from "react-native-svg";
import * as shape from "d3-shape";
import colors from "../../utilities/constants/colors";

export const Axis = () => {
  return (
    <View>
      <Path
        d={shape
          .line()([
            [0, 0],
            [0, -200],
          ])!
          .toString()}
        strokeWidth={3}
        stroke={colors.lightPurple}
      />

      <Path
        d={shape
          .line()([
            [0, 0],
            [400, 0],
          ])!
          .toString()}
        strokeWidth={3}
        stroke={colors.lightPurple}
      />
    </View>
  );
};
