import Svg from "react-native-svg";
import {
  DEVICE_HEIGHT,
  DEVICE_WIDTH,
} from "../../utilities/constants/dimentions";
import { ChartProps } from "../../utilities/types/healthMonitoringTypes";
import { Axis } from "./Axis";
import { Curve } from "./Curve";

export const Chart = (props: ChartProps) => {
  const { data } = props;

  const width = DEVICE_WIDTH * 0.9;
  const height = DEVICE_HEIGHT * 0.26;

  return (
    <Svg
      width={"90%"}
      height={DEVICE_HEIGHT * 0.25}
      viewBox={`-3 -200 ${width} ${height}`}
    >
      <Curve data={data} />
      <Axis data={data} />
    </Svg>
  );
};
