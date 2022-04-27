import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { AssociatedPatientProps } from "../../utilities/types/componentsTypes";
import colors from "../../utilities/constants/colors";

const AssociatedPatientCard = (props: AssociatedPatientProps) => {
  const { patientName, patientAddress, onPress, backgroundColor } = props;

  const textColor =
    backgroundColor === colors.darkGreen ? "white" : colors.darkGreen;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...styles.container, backgroundColor }}
    >
      <View>
        <Text style={{ ...styles.title, color: textColor }}>{patientName}</Text>
        <Text style={{ ...styles.location, color: textColor }}>
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
  location: {
    fontFamily: "Cairo-Medium",
    fontSize: 16,
    textAlign: "center",
  },
});
