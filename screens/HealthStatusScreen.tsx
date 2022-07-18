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
import { DataStatus } from "../components/generalComponents/DataStatus";
import { SensorCard } from "../components/healthStatusComponents/SensorCard";
import { startConnection, storeData } from "../store/actions/healthMonitoring";
import { RootState } from "../store/reducers/rootReducer";
import { ImportantNote, NormalText } from "../utilities/types/fontTypes";
import { HealthStatusScreenProps } from "../utilities/types/navigationTypes/mainNavigationTypes";

const HealthStatusScreen = (props: HealthStatusScreenProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch<any>();

  const user_id = useSelector(
    (state: RootState) => state.user.userData?.userMainData._id
  );

  const sensorsAllData = useSelector(
    (state: RootState) => state.healthMonitoring.data
  );

  const sensorsData = sensorsAllData[sensorsAllData.length - 1];

  const socket: Socket | undefined = useSelector(
    (state: RootState) => state.healthMonitoring.socket
  );

  if (socket) {
    socket.on("data", (message) => {
      dispatch(storeData(message));
    });
  }

  const sensorsValues = [
    {
      sensorName: t("healthStatus.oxygenSaturation"),
      image: require("../assets/images/bloodDrop.png"),
      value: sensorsData.SPO2,
      unit: "%",
    },
    {
      sensorName: t("healthStatus.heartRate"),
      image: require("../assets/images/heart.png"),
      value: sensorsData.Pulse,
      unit: t("healthStatus.bpm"),
    },
    {
      sensorName: t("healthStatus.temprature"),
      image: require("../assets/images/temprature.png"),
      value: sensorsData.temprature,
      unit: t("healthStatus.celsius"),
    },
  ];

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/Vector.png")}
        style={styles.backgroundImage}
      >
        <DataStatus>
          <FlatList
            data={sensorsValues}
            renderItem={({ item, index }) => (
              <SensorCard sensor={item} key={index} />
            )}
          />
          <View style={{ alignItems: "center" }}>
            <Text style={styles.note}>{t("healthStatus.note")}</Text>
            <Text style={ImportantNote}>
              {t("healthStatus.lastUpdate")}
              {sensorsData.time}
            </Text>
          </View>
        </DataStatus>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
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
