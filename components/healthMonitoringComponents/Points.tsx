import React from "react";
import { FlatList, View } from "react-native";
import { Circle } from "react-native-svg";
import colors from "../../utilities/constants/colors";
import { CurveProps } from "../../utilities/types/healthMonitoringTypes";

export const Points = (props: CurveProps) => {
  const { data } = props;
  return (
    <FlatList
      data={data}
      renderItem={({ item, index }) => {
        return (
          <View key={index}>
            <Circle r={5} x={item[0]} y={item[1]} fill={colors.darkPink} />
          </View>
        );
      }}
    />
  );
};
