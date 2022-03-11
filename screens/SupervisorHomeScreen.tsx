import React from "react";
import { Button, StyleSheet, Text, View, ImageBackground } from "react-native";
import { SupervisorHomeProps } from "../navigation/navigationUtils";
import MainButton from "../components/UI/mainButton";
import colors from "../constants/colors";

const SupervisorHomeScreen = (props: SupervisorHomeProps) => {
  // there's a dynamic rendering for the name of the user when we get it from the db
  const userName = "Alaa";

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/Header.png")}
        resizeMode="cover"
        style={styles.coverImage}
      />
      <View>
        <Text style={styles.title}>Good Morning, {userName}</Text>
        <Text style={styles.normalText}>We wish you a good day!</Text>
      </View>

      <View style={styles.buttons}>
        <View style={styles.buttonColContainer}>
          <MainButton
            title="My Profile"
            buttonStyle={styles.profileButtonStyle}
            titleStyle={styles.profileTitleStyle}
            onPress={() => props.navigation.navigate("Profile")}
            icon={{ name: "ios-person", size: 30, color: colors.darkGreen }}
            image={{ url: require("../assets/hospital.png") }}
            iconOrImage={true}
          />
          <MainButton
            title="New Patient"
            buttonStyle={styles.patientButtonStyle}
            titleStyle={styles.patientTitleStyle}
            onPress={() => props.navigation.navigate("PatientHome")}
            icon={{ name: "ios-cart", size: 20, color: "white" }}
            image={{ url: require("../assets/hospital.png") }}
            iconOrImage={false}
          />
        </View>
        <View style={styles.buttonColContainer}>
          <MainButton
            title="Patients Status"
            buttonStyle={styles.statusButtonStyle}
            titleStyle={styles.statusTitleStyle}
            onPress={() => props.navigation.navigate("PatientHome")}
            icon={{ name: "", size: 20, color: "white" }}
            image={{ url: require("../assets/hospital.png") }}
            iconOrImage={false}
          />

          <MainButton
            title="Help"
            buttonStyle={styles.helpButtonStyle}
            titleStyle={styles.helpTitleStyle}
            onPress={() => props.navigation.navigate("PatientHome")}
            icon={{ name: "", size: 20, color: "white" }}
            image={{ url: require("../assets/hospital.png") }}
            iconOrImage={false}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontFamily: "Cairo-Bold",
    textAlign: "center",
  },
  normalText: {
    fontSize: 15,
    fontFamily: "Cairo-Regular",
    textAlign: "center",
  },
  buttons: {
    flexDirection: "row",
    margin: 10,
    width: 200,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  buttonColContainer: {
    flexDirection: "column",
  },
  coverImage: {
    flex: 1,
    width: 380,
    height: 350,
  },
  profileButtonStyle: {
    backgroundColor: "#E7D9EA",
    borderWidth: 2,
    borderColor: "#E7D9EA",
    borderRadius: 30,
    justifyContent: "center",
    padding: 15,
    height: 100,
    width: 150,
    marginHorizontal: 70,
    marginVertical: 5,
  },
  profileTitleStyle: {
    fontFamily: "Cairo-Bold",
    color: colors.darkGreen,
    fontSize: 20,
    textAlign: "center",
  },
  patientButtonStyle: {
    backgroundColor: colors.darkGreen,
    borderWidth: 2,
    borderColor: colors.darkGreen,
    borderRadius: 30,
    justifyContent: "center",
    padding: 15,
    height: 150,
    width: 150,
    marginHorizontal: 70,
    marginVertical: 5,
  },
  patientTitleStyle: {
    fontFamily: "Cairo-Bold",
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  statusButtonStyle: {
    backgroundColor: colors.darkGreen,
    borderWidth: 2,
    borderColor: colors.darkGreen,
    borderRadius: 30,
    justifyContent: "center",
    padding: 15,
    height: 150,
    width: 150,
    marginHorizontal: 70,
    marginVertical: 5,
  },
  statusTitleStyle: {
    fontFamily: "Cairo-Bold",
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  helpButtonStyle: {
    backgroundColor: colors.darkPink,
    borderWidth: 2,
    borderColor: colors.darkPink,
    borderRadius: 30,
    justifyContent: "center",
    padding: 15,
    height: 100,
    width: 150,
    marginHorizontal: 70,
    marginVertical: 5,
  },
  helpTitleStyle: {
    fontFamily: "Cairo-Bold",
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
});

export default SupervisorHomeScreen;
