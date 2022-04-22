import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { AssociatedPatientsProps } from "../navigation/navigationUtils";
import AssociatedPatientCard from "../components/AssociatedPatientCard";
import colors from "../utilities/constants/colors";
import { BackButton } from "../components/buttons/BackButton";

const AssociatedPatientsScreen = (props: AssociatedPatientsProps) => {
  // comes dynamically from the db and rendered in a flatList
  const patientName = "Emelia Erheart";
  const location = "Atlantic ocean";
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/Vector.png")}
        resizeMode="cover"
        style={styles.content}
      >
        <View style={styles.backButton}>
          <BackButton onPress={() => props.navigation.goBack()} />
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Associated Patients</Text>
          <AssociatedPatientCard
            onPress={() => props.navigation.navigate("SupervisedPatient")}
            patientName={patientName}
            backgroundColor={colors.darkGreen}
            patientAddress={location}
          />
          <AssociatedPatientCard
            onPress={() => props.navigation.navigate("SupervisedPatient")}
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
    padding: 5,
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
    marginLeft: 20,
  },
  innerContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AssociatedPatientsScreen;
