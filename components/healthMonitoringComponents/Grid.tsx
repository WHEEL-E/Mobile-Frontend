import React from "react";
import { View } from "react-native";
import { Path } from "react-native-svg";
import * as shape from "d3-shape";
import colors from "../../utilities/constants/colors";

export const Grid = () => {
  const xAxis: [number, number][][] = [];
  const yAxis: [number, number][][] = [];

  for (let i = 0; i < 400; i += 10) {
    xAxis.push([
      [i, 0],
      [i, -200],
    ]);
  }

  for (let i = 0; i > -200; i -= 10) {
    yAxis.push([
      [0, i],
      [400, i],
    ]);
  }

  return (
    <View>
      {xAxis.map((data) => {
        return (
          <Path
            d={shape.line()(data)!.toString()}
            strokeWidth={0.1}
            stroke={colors.lightPurple}
            key={data[0][0]}
          />
        );
      })}
      {yAxis.map((data) => {
        return (
          <Path
            d={shape.line()(data)!.toString()}
            strokeWidth={0.1}
            stroke={colors.lightPurple}
            key={data[1][1]}
          />
        );
      })}
    </View>
  );
};
