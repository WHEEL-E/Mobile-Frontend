import Svg from "react-native-svg";
import { ChartProps } from "../../utilities/types/healthMonitoringTypes";
import { Axis } from "./Axis";
import { AxisNumbers } from "./AxisNumbers";
import { Curve } from "./Curve";
import { Grid } from "./Grid";
import {
  DEVICE_HEIGHT,
  DEVICE_WIDTH,
} from "../../utilities/constants/dimentions";

export const Chart = (props: ChartProps) => {
  const { data } = props;

  const width = DEVICE_WIDTH * 0.9;
  const height = DEVICE_HEIGHT * 0.26;

  return (
    <Svg
      width={"90%"}
      height={DEVICE_HEIGHT * 0.25}
      viewBox={`-20 -150 ${width} ${height}`}
    >
      <Grid />
      <Curve data={data} />
      <Axis />
      <AxisNumbers />
    </Svg>
  );
};
