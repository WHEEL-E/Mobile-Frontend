import React from "react";
import { View } from "react-native";
import { Path } from "react-native-svg";
import * as shape from "d3-shape";
import { BehaviorSubject, delay } from "rxjs";
import colors from "../../utilities/constants/colors";
import { CurveProps } from "../../utilities/types/healthMonitoringTypes";
import { DEVICE_WIDTH } from "../../utilities/constants/dimentions";

export const Curve = (props: CurveProps) => {
  const { data } = props;
  const placeHolder: [number, number] = [0, 0];
  const sub = new BehaviorSubject(placeHolder);
  const [subject] = React.useState(sub);
  const [sensorsData, setSensorsData] = React.useState([
    [0, 0],
    [0, 0],
    [0, 0],
  ]);

  let minX = 0;
  if (data.length > 0) minX = data[0][0];

  React.useEffect(() => {
    for (const d of data) {
      subject.next(d);
    }
  }, []);

  React.useEffect(() => {
    const observable = subject.pipe(delay(1000)).subscribe((term) => {
      setSensorsData([...sensorsData, term]);
      return sensorsData;
    });
    return () => {
      observable.unsubscribe();
      subject.unsubscribe();
    };
  }, [subject]);

  return (
    <View>
      <Path
        d={shape
          .line()
          .curve(shape.curveCardinalOpen.tension(0.5))(
            data.map(([x, y]) => [(x - minX) * 10, -1 * y])
          )!
          .toString()}
        strokeWidth={DEVICE_WIDTH * 0.01}
        stroke={colors.lightPurple}
      />
    </View>
  );
};
