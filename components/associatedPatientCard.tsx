import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import colors from "../utilities/constants/colors";

interface AssociatedPatientProps {
  patientName: string;
  patientAddress: string;
  onPress: () => void;
  backgroundColor: string;
}

const AssociatedPatientCard = (props: AssociatedPatientProps) => {
  const { patientName, patientAddress, onPress, backgroundColor } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...styles.container, backgroundColor }}
    >
      <View>
        <Text
          style={
            backgroundColor === colors.darkGreen
              ? styles.whiteTitle
              : styles.title
          }
        >
          {patientName}
        </Text>
        <Text
          style={
            backgroundColor === colors.darkGreen
              ? styles.whiteLocation
              : styles.location
          }
        >
          {patientAddress}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default AssociatedPatientCard;

const styles = StyleSheet.create({
  container: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    margin: 10,
    padding: 10,
    overflow: "hidden",
    width: "90%",
  },
  title: {
    fontFamily: "Cairo-Bold",
    fontSize: 20,
    textAlign: "center",
  },
  whiteTitle: {
    fontFamily: "Cairo-Bold",
    fontSize: 20,
    color: "#fff",
  },
  location: {
    fontFamily: "Cairo-Medium",
    fontSize: 16,
    textAlign: "center",
  },
  whiteLocation: {
    fontFamily: "Cairo-Medium",
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
});
