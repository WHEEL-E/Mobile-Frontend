import React from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import { HomeProps } from "../utilities/types/navigationTypes/mainNavigationTypes";
import { MainButton } from "../components/buttons/MainButton";
import colors from "../utilities/constants/colors";

const HomeScreen = (props: HomeProps) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <ScrollView>
          <MainButton
            title="Supervisor Home Screen"
            buttonStyle={{
              ...styles.button,
              backgroundColor: colors.lightGreen,
            }}
            titleStyle={styles.ButtonText}
            onPress={() => navigation.navigate("SupervisorHome")}
            image={{ url: require("../assets/images/hospital.png") }}
          />
          <MainButton
            title="Patient Home Screen"
            buttonStyle={{
              ...styles.button,
              backgroundColor: colors.darkPink,
            }}
            titleStyle={styles.ButtonText}
            onPress={() => navigation.navigate("PatientHome")}
            image={{ url: require("../assets/images/hospital.png") }}
          />
          <MainButton
            title="Change language"
            buttonStyle={{
              ...styles.button,
              backgroundColor: colors.darkGreen,
            }}
            titleStyle={styles.ButtonText}
            onPress={() => navigation.navigate("ChangeLanguage")}
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
  button: {
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
  ButtonText: {
    fontFamily: "Cairo-Bold",
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
});

export default HomeScreen;
