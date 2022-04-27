import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import AssociatedPatientCard from "../components/associatedPatientComponents/AssociatedPatientCard";
import colors from "../utilities/constants/colors";
import { BackButton } from "../components/buttons/BackButton";
import { AssociatedPatientsProps } from "../utilities/types/navigationTypes/mainNavigationTypes";

const AssociatedPatientsScreen = (props: AssociatedPatientsProps) => {
  const { navigation } = props;

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
          <BackButton onPress={() => navigation.goBack()} />
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Associated Patients</Text>
          <AssociatedPatientCard
            onPress={() => navigation.navigate("SupervisedPatient")}
            patientName={patientName}
            backgroundColor={colors.darkGreen}
            patientAddress={location}
          />
          <AssociatedPatientCard
            onPress={() => navigation.navigate("SupervisedPatient")}
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
