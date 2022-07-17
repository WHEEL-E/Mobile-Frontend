import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text as TextNative,
  ImageBackground,
} from "react-native";
import Svg, { Text } from "react-native-svg";
import { Path } from "react-native-svg";
import * as shape from "d3-shape";
import data from "../data/mapData.json";
import mapButtonsData from "../data/mapButtonsData.json";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../utilities/constants/dimentions";
import { NormalText } from "../utilities/types/fontTypes";
import { lineData, mapButtondata } from "../utilities/types/mapTypes";
import { useDispatch, useSelector } from "react-redux";
import { initSocket } from "../store/actions/socket";
import { RootState } from "../store/reducers/rootReducer";
import { Socket } from "socket.io-client";
import colors from "../utilities/constants/colors";

const MapScreen = () => {
  const width = DEVICE_WIDTH * 0.9;
  const height = DEVICE_HEIGHT * 0.26;

  const lines: lineData[] = data.data as lineData[];
  const buttonsData: mapButtondata[] = mapButtonsData.data as mapButtondata[];

  const dispatch = useDispatch<any>();

  const socket = useSelector(
    (state: RootState) => state.healthMonitoring.socket
  ) as Socket;

  const initialColors = [
    "#edebdf",
    "#edebdf",
    "#C2BCB9",
    "#CCCBB4",
    "#d8d9d1",
    "#edebdf",
    "#edebdf",
    "#dcd4bd",
    "#dcd4bd",
  ];

  const [backgrounds, setBackgrounds] = React.useState(initialColors);

  return (
    <View style={styles.container}>
      <ImageBackground
        testID="backgroundImage"
        source={require("../assets/images/Vector.png")}
        style={styles.backgroundImage}
      >
        <Svg
          width={DEVICE_WIDTH}
          height={DEVICE_WIDTH * 1.2}
          viewBox={`-20 -150 ${width} ${height}`}
          fill="red"
        >
          {lines.map(({ line, width, color }, index) => (
            <Path
              d={shape
                .line()(line.map(([X, Y]) => [X, Y / 1.5]))!
                .toString()}
              strokeWidth={width * 3}
              stroke={color}
              key={index.toString()}
            />
          ))}
          {buttonsData.map(({ name, line, text: { X, Y }, sentVal }, index) => (
            <View key={index.toString()}>
              <Path
                d={shape
                  .line()(line.map(([X, Y]) => [X, Y / 1.5]))!
                  .toString()}
                strokeWidth={0}
                fill={backgrounds[index]}
                onPressIn={() => {
                  const newBackgrounds = [...backgrounds];
                  newBackgrounds[index] = colors.darkGreen;
                  setBackgrounds(newBackgrounds);
                  socket.emit("action", sentVal);
                }}
                onPressOut={() => {
                  const newBackgrounds = [...backgrounds];
                  newBackgrounds[index] = initialColors[index];
                  setBackgrounds(newBackgrounds);
                }}
              />
              <Text
                fontSize={DEVICE_WIDTH * 0.04}
                fill="black"
                textAnchor="middle"
                x={X}
                y={Y / 1.5}
              >
                {name}
              </Text>
            </View>
          ))}
        </Svg>
        <TextNative style={{ ...NormalText, textAlign: "center" }}>
          To move around using the chair press on the destination room you want
          to enter
        </TextNative>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",

    justifyContent: "space-between",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "cover",

    paddingVertical: "20%",
  },
});

export default MapScreen;
