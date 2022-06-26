import React from "react";
import { View } from "react-native";
import { Path } from "react-native-svg";
import * as shape from "d3-shape";
import colors from "../../utilities/constants/colors";
import { CurveProps } from "../../utilities/types/healthMonitoringTypes";

export const Curve = (props: CurveProps) => {
  const { data } = props;

  const [minX, minY] = data.reduce(([a, b], [c, d]) => [
    Math.min(a, c),
    Math.min(b, d),
  ]);

  return (
    <View>
      <Path
        d={shape
          .line()
          .curve(shape.curveCardinalOpen.tension(0.5))(
            data.map(([x, y]) => [(x - minX) * 10, -1 * y])
          )!
          .toString()}
        strokeWidth={5}
        stroke={colors.lightPurple}
      />
    </View>
  );
};
