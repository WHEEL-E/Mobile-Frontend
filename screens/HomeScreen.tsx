import React from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import { HomeProps } from "../navigation/navigationUtils";
import { MainButton } from "../components/buttons/MainButton";
import colors from "../utilities/constants/colors";

const HomeScreen = (props: HomeProps) => {
  // Should contain the logic of choosing between patient homeScreen and supervisor homeScreen
  // According to signIn information
  return (
    <View style={styles.container}>
      <Text style={styles.title}>go to Profile</Text>
      <View style={styles.buttons}>
        <ScrollView>
          <MainButton
            title="Supervisor Home Screen"
            buttonStyle={{
              backgroundColor: colors.darkGreen,
              borderWidth: 2,
              borderColor: "white",
              borderRadius: 30,
              justifyContent: "center",
              padding: 15,
              height: 150,
              width: 200,
              marginHorizontal: 50,
              marginVertical: 10,
            }}
            titleStyle={{
              fontFamily: "Cairo-Bold",
              color: "white",
              fontSize: 20,
              textAlign: "center",
            }}
            onPress={() => props.navigation.navigate("SupervisorHome")}
            image={{ url: require("../assets/images/hospital.png") }}
          />
          <MainButton
            title="Patient Home Screen"
            buttonStyle={{
              backgroundColor: colors.darkPink,
              borderWidth: 2,
              borderColor: "white",
              borderRadius: 30,
              justifyContent: "center",
              padding: 15,
              height: 150,
              width: 200,
              marginHorizontal: 50,
              marginVertical: 10,
            }}
            titleStyle={{
              fontFamily: "Cairo-Bold",
              color: "white",
              fontSize: 20,
              textAlign: "center",
            }}
            onPress={() => props.navigation.navigate("PatientHome")}
            image={{ url: require("../assets/images/hospital.png") }}
          />
          <MainButton
            title="Change language"
            buttonStyle={styles.changeLanguageButton}
            titleStyle={styles.changeLanguageText}
            onPress={() => props.navigation.navigate("ChangeLanguage")}
            icon={{ name: "globe-outline", size: 40, color: "black" }}
          />
        </ScrollView>
      </View>
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
  title: {
    fontSize: 27,
    fontFamily: "Cairo-Bold",
  },
  buttons: {
    marginBottom: 70,
    width: 300,
  },
  changeLanguageButton: {
    backgroundColor: colors.lightGreen,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 30,
    justifyContent: "center",
    padding: 15,
    height: 150,
    width: 200,
    marginHorizontal: 50,
    marginVertical: 10,
  },
  changeLanguageText: {
    fontFamily: "Cairo-Bold",
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
});

export default HomeScreen;
