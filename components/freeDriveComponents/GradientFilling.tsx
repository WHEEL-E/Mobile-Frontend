import React from "react";
import { Defs, Stop } from "react-native-svg";
import { LinearGradient as Gradient } from "react-native-svg";

export const Gradientfilling = () => {
  return (
    <Defs>
      <Gradient id="GradientFilling" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#3B3B3B" />
        <Stop offset="50%" stopColor="#000000" />
        <Stop offset="100%" stopColor="#8D8787" />
      </Gradient>
    </Defs>
  );
};
