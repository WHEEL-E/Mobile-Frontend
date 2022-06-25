import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { startConnection } from "../store/actions/healthMonitoring";
import { RootState } from "../store/reducers/rootReducer";
import { Socket } from "socket.io-client";

const HealthMonitoringScreen = () => {
  const dispatch = useDispatch<any>();

  const socket: Socket | undefined = useSelector(
    (state: RootState) => state.healthMonitoring.socket
  );

  React.useEffect(() => {
    dispatch(startConnection());
  }, []);

  if (socket) {
    socket.on("data", (message) => {
      console.log(message);
    });
  }

  return (
    <View style={styles.container}>
      <Text>HI</Text>
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
});

export default HealthMonitoringScreen;
