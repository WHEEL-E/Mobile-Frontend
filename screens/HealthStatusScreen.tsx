import React from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
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
      sensorName: t("healthStatus.oxygenSaturation"),
      image: require("../assets/images/bloodDrop.png"),
      value: sensorsData.SPO2,
      unit: t("healthStatus.mmhg"),
    },
    {
      sensorName: t("healthStatus.heartRate"),
      image: require("../assets/images/heart.png"),
      value: sensorsData.Pulse,
      unit: t("healthStatus.bpm"),
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
          <Text style={styles.note}>{t("healthStatus.note")}</Text>
          <Text style={ImportantNote}>
            {t("healthStatus.lastUpdate")}
            {sensorsData.time}
          </Text>
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
