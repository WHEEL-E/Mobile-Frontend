import React from "react";
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

const HealthMonitoring = (props: HealthMonitoringProps) => {
  const sensorsData: UserSensors[] = [
    { SPO2: 400, user_id: 1, Pulse: 400, time: "19:33:14" },
    { SPO2: 500, user_id: 1, Pulse: 500, time: "19:33:15" },
    { SPO2: 400, user_id: 1, Pulse: 600, time: "19:33:16" },
    { SPO2: 650, user_id: 1, Pulse: 650, time: "19:33:17" },
    { SPO2: 655, user_id: 1, Pulse: 655, time: "19:33:18" },
    { SPO2: 655, user_id: 1, Pulse: 655, time: "19:33:19" },
    { SPO2: 655, user_id: 1, Pulse: 655, time: "19:33:20" },
    { SPO2: 655, user_id: 1, Pulse: 420, time: "19:33:21" },
    { SPO2: 655, user_id: 1, Pulse: 655, time: "19:33:22" },
    { SPO2: 400, user_id: 1, Pulse: 400, time: "19:33:23" },
    { SPO2: 655, user_id: 1, Pulse: 655, time: "19:33:24" },
    { SPO2: 655, user_id: 1, Pulse: 655, time: "19:33:25" },
    { SPO2: 600, user_id: 1, Pulse: 600, time: "19:33:26" },
    { SPO2: 500, user_id: 1, Pulse: 500, time: "19:33:27" },
    { SPO2: 655, user_id: 1, Pulse: 655, time: "19:33:28" },
    { SPO2: 430, user_id: 1, Pulse: 430, time: "19:33:29" },
    { SPO2: 655, user_id: 1, Pulse: 655, time: "19:33:30" },
    { SPO2: 600, user_id: 1, Pulse: 600, time: "19:33:31" },
    { SPO2: 655, user_id: 1, Pulse: 655, time: "19:33:32" },
    { SPO2: 655, user_id: 1, Pulse: 655, time: "19:33:33" },
    { SPO2: 430, user_id: 1, Pulse: 430, time: "19:33:34" },
    { SPO2: 655, user_id: 1, Pulse: 655, time: "19:33:35" },
    { SPO2: 655, user_id: 1, Pulse: 655, time: "19:33:36" },
    { SPO2: 655, user_id: 1, Pulse: 655, time: "19:33:37" },
  ];

  const dataPulse: SensorData = {
    name: "Heart Rate",
    data: sensorsData.map((field) => {
      const split = field.time.split(":").map((a) => +a);
      const xAxis = +split.reduce((a, b) => a + b);
      return [xAxis, (3 * (field.Pulse - 400)) / 260 + 97];
    }),
  };

  const dataSaturation: SensorData = {
    name: "Oxygen saturation",
    data: sensorsData.map((field) => {
      const split = field.time.split(":").map((a) => +a);
      const xAxis = +split.reduce((a, b) => a + b);
      return [xAxis, (3 * (field.SPO2 - 400)) / 260 + 97];
    }),
  };

  const allData = [dataPulse, dataSaturation];

  return (
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default HealthMonitoring;
