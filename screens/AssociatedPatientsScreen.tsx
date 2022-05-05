import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import AssociatedPatientCard from "../components/associatedPatientComponents/AssociatedPatientCard";
import colors from "../utilities/constants/colors";
import { BackButton } from "../components/buttons/BackButton";
import { AssociatedPatientsProps } from "../utilities/types/navigationTypes/mainNavigationTypes";
import { Patient } from "../utilities/types/userTypes";

const AssociatedPatientsScreen = (props: AssociatedPatientsProps) => {
  const { navigation } = props;

  const patient: Patient = {
    userId: "id",
    userName: "Emelia Erheart",
    address: "Atlantic ocean",
    phone: "123456",
    emergencyContacts: ["123"],
    mail: "patientMail@gmail.com",
    smoking: false,
    height: 170,
    weight: 80,
    age: 25,
    gender: "female",
    profilePhoto:
      "https://helostatus.com/wp-content/uploads/2021/09/2021-profile-WhatsApp-hd.jpg",
    healthMonitor: [],
    healthRecords: [],
  };

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
            onPress={() =>
              navigation.navigate("SupervisedPatient", { patient: patient })
            }
            patientName={patient.userName}
            backgroundColor={colors.darkGreen}
            patientAddress={patient.address}
          />
          <AssociatedPatientCard
            onPress={() =>
              navigation.navigate("SupervisedPatient", { patient: patient })
            }
            patientName={patient.userName}
            backgroundColor={colors.lightGray}
            patientAddress={patient.address}
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
