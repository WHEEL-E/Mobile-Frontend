import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";
import fonts from "../constants/fonts";
import { MainButton } from "../components/UI/mainButton";
import { SquareButton } from "../components/UI/squareButton";
import { PatientHomeProps } from "../navigation/navigationUtils";

const PatientHomeScreen = (props: PatientHomeProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.logo}
          source={require("../assets/logo-b-app.png")}
        />
        <Text style={styles.mainText}>Good morning, user</Text>
        <Text style={styles.subText} testID="welcomeText">
          We wish you have a good day
        </Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.buttonsCol}>
          <MainButton
            title="Map"
            titleStyle={{ ...styles.bigButtonTitle, color: "white" }}
            buttonStyle={{
              ...styles.mainButton,
              backgroundColor: colors.darkGreen,
            }}
            onPress={() => {}}
            image={{ url: require("../assets/map.png") }}
            icon={{ name: "", size: 24, color: "black" }}
            hasIcon={false}
          />
          <SquareButton
            title="Emergency Call"
            titleStyle={{ ...styles.smallButtonTitle, color: "white" }}
            buttonStyle={{
              ...styles.smallButton,
              backgroundColor: colors.darkPink,
            }}
            onPress={() => {}}
          />
          <SquareButton
            title="Free Driving"
            titleStyle={{ ...styles.smallButtonTitle, color: "white" }}
            buttonStyle={{
              ...styles.smallButton,
              backgroundColor: colors.darkGreen,
            }}
            onPress={() => {}}
          />
          <SquareButton
            title="Add a supervisor"
            titleStyle={{ ...styles.smallButtonTitle, color: colors.darkBlue }}
            buttonStyle={{
              ...styles.smallButton,
              backgroundColor: colors.lightPurple,
            }}
            onPress={() => {}}
          />
          <SquareButton
            title="Help"
            titleStyle={{ ...styles.smallButtonTitle, color: "white" }}
            buttonStyle={{
              ...styles.smallButton,
              backgroundColor: colors.lightGreen,
            }}
            onPress={() => {}}
          />
        </View>
        <View style={styles.buttonsCol}>
          <MainButton
            title="Health status"
            titleStyle={{ ...styles.bigButtonTitle, color: colors.darkBlue }}
            buttonStyle={{
              ...styles.mainButton,
              backgroundColor: colors.lightPurple,
            }}
            onPress={() => {}}
            image={{ url: require("../assets/health-state.png") }}
            icon={{ name: "", size: 24, color: "black" }}
            hasIcon={false}
          />
          <SquareButton
            title="Get my chair"
            titleStyle={{ ...styles.smallButtonTitle, color: "white" }}
            buttonStyle={{
              ...styles.smallButton,
              backgroundColor: colors.darkGreen,
            }}
            onPress={() => {}}
          />
          <SquareButton
            title="Reminders"
            titleStyle={{ ...styles.smallButtonTitle, color: "white" }}
            buttonStyle={{
              ...styles.smallButton,
              backgroundColor: colors.lightGreen,
            }}
            onPress={() => {
              props.navigation.navigate("PatientReminders");
            }}
          />
          <MainButton
            title="My profile"
            titleStyle={styles.profileTitle}
            buttonStyle={styles.myProfileButton}
            onPress={() => {
              props.navigation.navigate("Profile");
            }}
            icon={{
              name: "person-outline",
              size: 70,
              color: colors.lightBrown,
            }}
            hasIcon={true}
            image={{ url: require("../assets/hospital.png") }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingTop: "10%",
  },
  logo: {
    height: 40,
    resizeMode: "center",
    width: "70%",
    alignSelf: "center",
  },
  mainText: {
    fontFamily: fonts.CairoBold,
    fontSize: 30,
  },
  subText: {
    fontFamily: fonts.CairoMedium,
    color: colors.darkGrey,
    fontSize: 20,
  },
  buttons: {
    marginBottom: 100,
    flex: 1,
    flexDirection: "row",
  },
  buttonsCol: {
    flex: 1,
  },
  mainButton: {
    borderRadius: 30,
    justifyContent: "center",
    flex: 3,
    margin: 2,
  },
  smallButton: {
    flex: 1,
    backgroundColor: colors.darkGreen,
    margin: 2,
  },
  myProfileButton: {
    backgroundColor: colors.darkGreen,
    justifyContent: "center",
    flex: 2,
    borderRadius: 30,
    margin: 2,
  },
  bigButtonTitle: {
    fontFamily: fonts.CairoBold,
    fontSize: 30,
    lineHeight: 40,
  },
  smallButtonTitle: {
    fontFamily: fonts.CairoSemiBold,
    fontSize: 18,
  },
  profileTitle: {
    fontFamily: fonts.CairoSemiBold,
    fontSize: 20,
    color: "white",
  },
});

export default PatientHomeScreen;
