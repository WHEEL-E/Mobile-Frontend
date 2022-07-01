import React from "react";
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Socket } from "socket.io-client";
import { SensorCard } from "../components/healthStatusComponents/SensorCard";
// import { startConnection } from "../store/actions/healthMonitoring";
import { RootState } from "../store/reducers/rootReducer";
import { ImportantNote, NormalText } from "../utilities/types/fontTypes";
import { HealthStatusScreenProps } from "../utilities/types/navigationTypes/mainNavigationTypes";

const HealthStatusScreen = (props: HealthStatusScreenProps) => {
  const dispatch = useDispatch<any>();
  const [sensorsData, setSensorsData] = React.useState({
    SPO2: 0,
    user_id: 1,
    Pulse: 0,
    time: "19:33:14",
  });

  //   const socket: Socket | undefined = useSelector(
  //     (state: RootState) => state.healthMonitoring.socket
  //   );

  //   React.useEffect(() => {
  //     dispatch(startConnection());
  //   }, []);

  //   if (socket) {
  //     socket.on("data", (message) => {
  //       setSensorsData(message);
  //     });
  //   }

  const sensorsValues = [
    {
      sensorName: "Oxygen Saturation",
      image: require("../assets/images/bloodDrop.png"),
      value: sensorsData.SPO2,
      unit: "mm Hg",
    },
    {
      sensorName: "Heart Rate",
      image: require("../assets/images/heart.png"),
      value: sensorsData.Pulse,
      unit: "BPM",
    },
  ];

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/Vector.png")}
        style={styles.backgroundImage}
      >
        <View style={{}}>
          {sensorsValues.map((item, index) => (
            <SensorCard sensor={item} key={index} />
          ))}
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.note}>
            To get updated values please place your hands at the sensors placed
            by your chair
          </Text>
          <Text style={ImportantNote}>Last Updated at: {sensorsData.time}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    resizeMode: "cover",
    paddingTop: "40%",
    paddingBottom: "20%",
  },
  note: {
    ...NormalText,
    textAlign: "center",
    paddingHorizontal: "5%",
    paddingVertical: "5%",
  },
});

export default HealthStatusScreen;
