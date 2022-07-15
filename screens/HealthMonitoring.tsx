import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startConnection } from "../store/actions/healthMonitoring";
import { RootState } from "../store/reducers/rootReducer";
import { Socket } from "socket.io-client";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { DEVICE_HEIGHT } from "../utilities/constants/dimentions";
import { Chart } from "../components/healthMonitoringComponents/Chart";
import { LinearGradient } from "expo-linear-gradient";
import { ImportantText } from "../utilities/types/fontTypes";
import { HealthMonitoringProps } from "../utilities/types/navigationTypes/mainNavigationTypes";
import {
  SensorData,
  UserSensors,
} from "../utilities/types/healthMonitoringTypes";
import { DataStatus } from "../components/generalComponents/DataStatus";
import data from "../data/healthMonitoringDummydata.json";
import { useTranslation } from "react-i18next";

const HealthMonitoringScreen = (props: HealthMonitoringProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch<any>();

  const initialData: UserSensors[] = data.data;

  const [sensorsData, setSensorsData] = React.useState(initialData);

  const socket: Socket | undefined = useSelector(
    (state: RootState) => state.healthMonitoring.socket
  );

  React.useEffect(() => {
    dispatch(startConnection());
  }, []);

  if (socket) {
    socket.on("data", (message) => {
      setSensorsData([...sensorsData, message]);
    });
  }

  const dataPulse: SensorData = {
    name: t("healthStatus.heartRate"),
    data: sensorsData.map((field) => {
      const split = field.time.split(":").map((a) => +a);
      const xAxis = +split.reduce((a, b) => a + b);
      return [xAxis, (40 * (field.Pulse - 400)) / 260 + 60];
    }),
  };

  const dataSaturation: SensorData = {
    name: t("healthStatus.oxygenSaturation"),
    data: sensorsData.map((field) => {
      const split = field.time.split(":").map((a) => +a);
      const xAxis = +split.reduce((a, b) => a + b);
      return [xAxis, (3 * (field.SPO2 - 400)) / 260 + 97];
    }),
  };

  const temprature: SensorData = {
    name: t("healthStatus.temprature"),
    data: sensorsData.map((field) => {
      const split = field.time.split(":").map((a) => +a);
      const xAxis = +split.reduce((a, b) => a + b);
      return [xAxis, field.temprature];
    }),
  };

  const allData = [dataSaturation, dataPulse, temprature];

  return (
    <View style={styles.container}>
      <DataStatus>
        <FlatList
          style={{ width: "90%" }}
          data={allData}
          renderItem={({ item, index }) => {
            return (
              <LinearGradient
                colors={["#000000", "#4E4B4B", "#140707"]}
                style={styles.graphContainer}
              >
                <Text style={styles.title}>{item.name}</Text>
                <Chart data={item.data} />
              </LinearGradient>
            );
          }}
        />
      </DataStatus>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "50%",
    paddingBottom: "20%",
  },
  graphContainer: {
    width: "90%",
    borderWidth: 1,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: DEVICE_HEIGHT * 0.02,
    marginVertical: DEVICE_HEIGHT * 0.02,
    paddingVertical: "5%",
  },
  title: {
    ...ImportantText,
    color: "white",
  },
});

export default HealthMonitoringScreen;
