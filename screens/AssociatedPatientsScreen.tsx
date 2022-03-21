import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { AssociatedPatientsProps } from "../navigation/navigationUtils";
import AssociatedPatientCard from "../components/associatedPatientCard";
import colors from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";

const AssociatedPatientsScreen = (props: AssociatedPatientsProps) => {
  // comes dynamically from the db and rendered in a flatList
  const patientName = "Emelia Erheart";
  const location = "Atlantic ocean";
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/Vector.png")}
        resizeMode="cover"
        style={styles.content}
      >
        <TouchableOpacity style={styles.backButton}>
          <Ionicons
            name="arrow-back"
            color="#000"
            size={35}
            onPress={() => props.navigation.goBack()}
          />
        </TouchableOpacity>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Associated Patients</Text>
          <AssociatedPatientCard
            onPress={() => props.navigation.navigate("SignIn")}
            patientName={patientName}
            backgroundColor={colors.darkGreen}
            patientAddress={location}
          />
          <AssociatedPatientCard
            onPress={() => props.navigation.navigate("SignIn")}
            patientName={patientName}
            backgroundColor={colors.lightGray}
            patientAddress={location}
          />
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
  },
  title: {
    fontSize: 27,
    fontFamily: "Cairo-Bold",
  },
  content: {
    width: "100%",
    height: "100%",
  },
  backButton: {
    marginTop: 20,
    justifyContent: "space-around",
    alignItems: "flex-start",
    marginLeft: 20,
  },
  innerContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AssociatedPatientsScreen;
