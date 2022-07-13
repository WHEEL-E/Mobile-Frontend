import React from "react";
import {
  StyleSheet,
  View,
  Text as TextNative,
  ImageBackground,
} from "react-native";
import Svg, { Text } from "react-native-svg";
import { Path } from "react-native-svg";
import * as shape from "d3-shape";
import colors from "../utilities/constants/colors";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../utilities/constants/dimentions";
import { NormalText } from "../utilities/types/fontTypes";

const MapScreen = () => {
  const width = DEVICE_WIDTH * 0.9;
  const height = DEVICE_HEIGHT * 0.26;

  const lines: { color: string; width: number; line: [number, number][] }[] = [
    // main borders
    {
      color: "black",
      width: 1,
      line: [
        [0, -70],
        [0, -600],
      ],
    },
    {
      color: "black",
      width: 1,
      line: [
        [330, -70],
        [330, -600],
      ],
    },
    {
      color: "black",
      width: 1,
      line: [
        [0, -600],
        [330, -600],
      ],
    },
    {
      color: "black",
      width: 1,
      line: [
        [0, -70],
        [330, -70],
      ],
    },

    //horizontal entrance lines
    {
      color: "black",
      width: 2,
      line: [
        [0, -200],
        [110, -200],
      ],
    },
    {
      color: "black",
      width: 2,
      line: [
        [220, -200],
        [330, -200],
      ],
    },

    //vertical entrance lines
    {
      color: "black",
      width: 2,
      line: [
        [110, -200],
        [110, -70],
      ],
    },
    {
      color: "black",
      width: 2,
      line: [
        [220, -200],
        [220, -70],
      ],
    },

    // horizonal middle lines
    {
      color: "black",
      width: 2,
      line: [
        [0, -350],
        [110, -350],
      ],
    },
    {
      color: "black",
      width: 2,
      line: [
        [220, -350],
        [330, -350],
      ],
    },
    //bathroom vertical lines
    {
      color: "black",
      width: 2,
      line: [
        [110, -600],
        [110, -470],
      ],
    },
    {
      color: "black",
      width: 2,
      line: [
        [220, -600],
        [220, -470],
      ],
    },
    //vertical red line
    /*  {
      color: "red",
      width: 2,
      line: [
        [165, -400],
        [165, -300],
      ],
    },
    {
      color: "red",
      width: 2,
      line: [
        [165, -250],
        [165, -150],
      ],
    },
    //bedrooms red line
    {
      color: "red",
      width: 2,
      line: [
        [200, -420],
        [260, -420],
      ],
    },
    {
      color: "red",
      width: 2,
      line: [
        [70, -420],
        [130, -420],
      ],
    },

    //living room red line
    {
      color: "red",
      width: 2,
      line: [
        [200, -270],
        [260, -270],
      ],
    },
    {
      color: "red",
      width: 2,
      line: [
        [120, -270],
        [130, -270],
      ],
    },
    {
      color: "red",
      width: 2,
      line: [
        [70, -270],
        [65, -270],
      ],
    },*/
  ];

  const buttonsData: {
    name: string;
    line: [number, number][];
    text: { X: number; Y: number };
  }[] = [
    {
      name: "Bathroom",
      line: [
        [113, -595],
        [217, -595],
        [217, -480],
        [113, -480],
        [113, -595],
      ],
      text: { X: 165, Y: -535 },
    },
    {
      name: "Entrance",
      line: [
        [113, -80],
        [217, -80],
        [217, -200],
        [113, -200],
        [113, -80],
      ],
      text: { X: 165, Y: -135 },
    },
    {
      name: "Hall 1",
      line: [
        [220, -200],
        [110, -200],
        [110, -357],
        [220, -357],
        [220, -200],
      ],
      text: { X: 165, Y: -265 },
    },
    {
      name: "Hall 2",
      line: [
        [223, -357],
        [107, -357],
        [107, -480],
        [223, -480],
        [223, -357],
      ],
      text: { X: 165, Y: -415 },
    },
    {
      name: `Dining`,
      line: [
        [110, -205],
        [50, -205],
        [50, -345],
        [110, -345],
        [110, -205],
      ],
      text: { X: 80, Y: -265 },
    },
    {
      name: `Kitchen`,
      line: [
        [50, -205],
        [2, -205],
        [2, -345],
        [50, -345],
        [50, -205],
      ],
      text: { X: 25, Y: -265 },
    },
    {
      name: `Living`,
      line: [
        [328, -205],
        [220, -205],
        [220, -345],
        [328, -345],
        [328, -205],
      ],
      text: { X: 295, Y: -265 },
    },
    {
      name: `room 2`,
      line: [
        [328, -357],
        [223, -357],
        [223, -598],
        [328, -598],
        [328, -357],
      ],
      text: { X: 295, Y: -415 },
    },
    {
      name: `room 1`,
      line: [
        [107, -355],
        [2, -355],
        [2, -598],
        [107, -598],
        [107, -355],
      ],
      text: { X: 35, Y: -415 },
    },
  ];

  const [backgrounds, setBackgrounds] = React.useState([
    "#edebdf",
    "#edebdf",
    "#C2BCB9",
    "#CCCBB4",
    "#d8d9d1",
    "#edebdf",
    "#edebdf",
    "#dcd4bd",
    "#dcd4bd",
  ]);

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
          {buttonsData.map(({ name, line, text: { X, Y } }, index) => (
            <View key={index.toString()}>
              <Path
                d={shape
                  .line()(line.map(([X, Y]) => [X, Y / 1.5]))!
                  .toString()}
                strokeWidth={0}
                fill={backgrounds[index]}
                onPressIn={() => {
                  const newBackgrounds = [...backgrounds];
                  newBackgrounds[index] = "black";
                  setBackgrounds(newBackgrounds);
                }}
                onPress={() => console.log(name)}
                onPressOut={() => {
                  const newBackgrounds = [...backgrounds];
                  newBackgrounds[index] = "transparent";
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
    backgroundColor: "#fff",
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
