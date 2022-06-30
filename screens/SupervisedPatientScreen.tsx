import React from "react";
import { useTranslation } from "react-i18next";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import { BackButton } from "../components/buttons/BackButton";
import { MainButton } from "../components/buttons/MainButton";
import { SquareButton } from "../components/buttons/SquareButton";
import colors from "../utilities/constants/colors";
import { DEVICE_HEIGHT } from "../utilities/constants/dimentions";
import fonts from "../utilities/constants/fonts";
import { SupervisedPatientProps } from "../utilities/types/navigationTypes/mainNavigationTypes";
import { User, UserTypes } from "../utilities/types/userTypes";

const SupervisedPatientScreen = (props: SupervisedPatientProps) => {
  const { navigation, route } = props;
  const { t } = useTranslation();

  const patientId = route.params.patientId;

  // TODO:Use the id to get the patient data
  const patient: User = {
    userMainData: {
      _id: "id",
      name: "Emelia Erheart",
      phone: 123456,
      email: "patientMail@gmail.com",
      profile_picture:
        "https://helostatus.com/wp-content/uploads/2021/09/2021-profile-WhatsApp-hd.jpg",
      gender: "female",
    },
    patientExtraData: {
      address: "Atlantic ocean",
      emergency_number: 123,
      smoking: false,
      height: 170,
      weight: 80,
      dob: "2015-03-22",
    },
    userType: UserTypes.PATIENT,
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/Union.png")}
        style={styles.backgroundImage}
      >
        <View style={styles.backButton}>
          <BackButton onPress={() => navigation.goBack()} />
        </View>
        <Image
          style={styles.logo}
          source={require("../assets/images/logo-b-app.png")}
        />
        <View style={styles.patientCard}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("../assets/images/IdPlaceHolder.png")}
            />
          </View>
          <Text style={styles.patientName}>{patient.userMainData.name}</Text>
        </View>
        <View style={styles.buttons}>
          <MainButton
            title={t("supervisedPatientScreen.map")}
            image={{ url: require("../assets/images/map.png") }}
            onPress={() => {}}
            buttonStyle={styles.mapButton}
            titleStyle={styles.buttonsTitle}
          />
          <View style={styles.smallButtonsContainer}>
            <SquareButton
              title={t("supervisedPatientScreen.reminders")}
              onPress={() => {
                navigation.navigate("Reminders", {
                  patientId: patient.userMainData._id,
                  receiver: patient.userMainData.name,
                });
              }}
              buttonStyle={styles.remindersButton}
              titleStyle={styles.buttonsTitle}
            />
            <SquareButton
              title={t("settings.settings")}
              onPress={() => {}}
              buttonStyle={styles.profileButton}
              titleStyle={{ ...styles.buttonsTitle, color: colors.darkGreen }}
            />
          </View>
          <MainButton
            title={t("supervisedPatientScreen.healthInfo")}
            image={{ url: require("../assets/images/health-state.png") }}
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
    resizeMode: "stretch",
    paddingVertical: "10%",
    paddingHorizontal: "5%",
  },
  backButton: {
    position: "absolute",
    top: "7%",
    left: "8%",
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
    width: "100%",
    height: DEVICE_HEIGHT * 0.1,
  },
  logo: {
    height: 40,
    resizeMode: "center",
    width: "70%",
    alignSelf: "center",
  },
  patientName: {
    fontFamily: fonts.CairoBold,
    fontSize: DEVICE_HEIGHT * 0.02,
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
    fontSize: DEVICE_HEIGHT * 0.02,
    color: "white",
  },
});

export default SupervisedPatientScreen;
