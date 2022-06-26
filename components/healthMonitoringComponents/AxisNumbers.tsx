import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-svg";

export const AxisNumbers = () => {
  const xAxis: number[] = [];
  const yAxis: number[] = [];

  for (let i = 0; i < 400; i += 10) {
    xAxis.push(i);
  }

  for (let i = 0; i > -200; i -= 10) {
    yAxis.push(i);
  }

  return (
    <View>
      {yAxis.map((data) => {
        return (
          <Text
            fontSize={5}
            fill="white"
            textAnchor="end"
            x={-3}
            y={data}
            dy={2.75}
            key={data}
          >
            {-data}
          </Text>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  VerticalText: { transform: [{ rotateZ: "90deg" }] },
});
