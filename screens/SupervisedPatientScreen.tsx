import React from "react";
import { useTranslation } from "react-i18next";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import { MainButton } from "../components/UI/mainButton";
import { SquareButton } from "../components/UI/squareButton";
import colors from "../constants/colors";
import fonts from "../constants/fonts";
import { SupervisedPatientProps } from "../navigation/navigationUtils";

const SupervisedPatientScreen = (props: SupervisedPatientProps) => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/Union.png")}
        style={styles.backgroundImage}
      >
        <Image
          style={styles.logo}
          source={require("../assets/logo-b-app.png")}
        />
        <View style={styles.patientCard}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("../assets/IdPlaceHolder.png")}
            />
          </View>
          <Text style={styles.patientName}>My supervised patient</Text>
        </View>
        <View style={styles.buttons}>
          <MainButton
            title={t("map")}
            image={{ url: require("../assets/map.png") }}
            icon={{ name: "", size: 24, color: "black" }}
            hasIcon={false}
            onPress={() => {}}
            buttonStyle={styles.mapButton}
            titleStyle={styles.buttonsTitle}
          />
          <View style={styles.smallButtonsContainer}>
            <SquareButton
              title={t("reminders")}
              onPress={() => {}}
              buttonStyle={styles.remindersButton}
              titleStyle={styles.buttonsTitle}
            />
            <SquareButton
              title={t("profile")}
              onPress={() => {}}
              buttonStyle={styles.profileButton}
              titleStyle={{ ...styles.buttonsTitle, color: colors.darkGreen }}
            />
          </View>
          <MainButton
            title={t("healthInfo")}
            image={{ url: require("../assets/health-state.png") }}
            icon={{ name: "", size: 24, color: "black" }}
            hasIcon={false}
            onPress={() => {}}
            buttonStyle={styles.healthButton}
            titleStyle={styles.buttonsTitle}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  backgroundImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "cover",
    paddingVertical: "10%",
    paddingHorizontal: "5%",
  },
  imageContainer: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginHorizontal: 5,
  },
  image: {
    height: "100%",
    aspectRatio: 1,
    resizeMode: "cover",
    borderRadius: 75,
  },
  patientCard: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  logo: {
    height: 40,
    resizeMode: "center",
    width: "70%",
    alignSelf: "center",
  },
  patientName: {
    fontFamily: fonts.CairoBold,
    fontSize: 20,
  },
  buttons: {
    flex: 1,
    paddingBottom: "15%",
  },
  mapButton: {
    backgroundColor: colors.darkGreen,
    borderRadius: 20,
    flex: 1,
    margin: 5,
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
  remindersButton: {
    backgroundColor: colors.lightGreen,
    borderRadius: 20,
    flex: 1,
    margin: 5,
  },
  profileButton: {
    backgroundColor: colors.lightPurple,
    borderRadius: 20,
    flex: 1,
    margin: 5,
  },
  healthButton: {
    backgroundColor: colors.darkGreen,
    borderRadius: 20,
    flex: 1,
    margin: 5,
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
  smallButtonsContainer: {
    flex: 1,
    flexDirection: "row",
  },
  buttonsTitle: {
    fontFamily: fonts.CairoBold,
    fontSize: 20,
    color: "white",
  },
});

export default SupervisedPatientScreen;
