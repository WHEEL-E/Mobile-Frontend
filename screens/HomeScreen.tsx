import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { HomeProps } from "../navigation/navigationUtils";
import MainButton from "../components/mainButton";

const HomeScreen = (props: HomeProps) => {
  // Should contain the logic of choosing between patient homeScreen and supervisor homeScreen
  // According to signIn information
  return (
    <View style={styles.container}>
      <Text style={styles.title}>go to Profile</Text>
      <View style={styles.buttons}>
        <MainButton
          title="SUPERVISOR HOME SCREEN"
          buttonStyle={{
            // NIT: use colors constants after PR approval and merge
            backgroundColor: "#11698E",
            borderWidth: 2,
            borderColor: "white",
            borderRadius: 30,
            justifyContent: "center",
            padding: 15,
            height: 200,
          }}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          titleStyle={{
            fontFamily: "Cairo-Bold",
            color: "white",
            fontSize: 20,
          }}
          onPress={() => props.navigation.navigate("SupervisorHome")}
          icon={{ name: "ios-cart", size: 20, color: "white" }}
          image={{ url: require("../assets/hospital.png") }}
        />
        <MainButton
          title="Patient HOME SCREEN"
          buttonStyle={{
            // NIT: use colors constants after PR approval and merge
            backgroundColor: "#11698E",
            borderWidth: 2,
            borderColor: "white",
            borderRadius: 30,
            justifyContent: "center",
            padding: 15,
            height: 200,
          }}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          titleStyle={{
            fontFamily: "Cairo-Bold",
            color: "white",
            fontSize: 20,
          }}
          onPress={() => props.navigation.navigate("PatientHome")}
          icon={{ name: "ios-cart", size: 20, color: "white" }}
          image={{ url: require("../assets/hospital.png") }}
        />
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
    margin: 10,
    width: 300,
  },
});

export default HomeScreen;
