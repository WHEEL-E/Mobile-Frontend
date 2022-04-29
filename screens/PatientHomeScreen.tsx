import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import colors from "../utilities/constants/colors";
import fonts from "../utilities/constants/fonts";
import { MainButton } from "../components/buttons/MainButton";
import { SquareButton } from "../components/buttons/SquareButton";
import { PatientHomeProps } from "../utilities/types/navigationTypes/mainNavigationTypes";
import { EmergencyCallModal } from "../components/homeScreenComponents/EmergencyCallModal";

const PatientHomeScreen = (props: PatientHomeProps) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const { navigation } = props;
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <EmergencyCallModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
      <View>
        <Image
          style={styles.logo}
          source={require("../assets/images/logo-b-app.png")}
        />
        <Text style={styles.mainText}>
          {t("patientHomeScreen.morning")}user
        </Text>
        <Text style={styles.subText} testID="welcomeText">
          {t("patientHomeScreen.wishGoodDay")}
        </Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.buttonsCol}>
          <MainButton
            title={t("patientHomeScreen.map")}
            titleStyle={{ ...styles.bigButtonTitle, color: "white" }}
            buttonStyle={{
              ...styles.mainButton,
              backgroundColor: colors.darkGreen,
            }}
            onPress={() => {}}
            image={{ url: require("../assets/images/map.png") }}
          />
          <SquareButton
            title={t("patientHomeScreen.emergencyCall")}
            titleStyle={{ ...styles.smallButtonTitle, color: "white" }}
            buttonStyle={{
              ...styles.smallButton,
              backgroundColor: colors.darkPink,
            }}
            onPress={() => {
              setIsModalVisible(true);
            }}
          />
          <SquareButton
            title={t("patientHomeScreen.freeDriving")}
            titleStyle={{ ...styles.smallButtonTitle, color: "white" }}
            buttonStyle={{
              ...styles.smallButton,
              backgroundColor: colors.darkGreen,
            }}
            onPress={() => {
              navigation.navigate("FreeDrive");
            }}
          />
          <SquareButton
            title={t("patientHomeScreen.addSupervisor")}
            titleStyle={{ ...styles.smallButtonTitle, color: colors.darkBlue }}
            buttonStyle={{
              ...styles.smallButton,
              backgroundColor: colors.lightPurple,
            }}
            onPress={() => {}}
          />
          <SquareButton
            title={t("patientHomeScreen.help")}
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
            title={t("patientHomeScreen.healthStatus")}
            titleStyle={{ ...styles.bigButtonTitle, color: colors.darkBlue }}
            buttonStyle={{
              ...styles.mainButton,
              backgroundColor: colors.lightPurple,
            }}
            onPress={() => {}}
            image={{ url: require("../assets/images/health-state.png") }}
          />
          <SquareButton
            title={t("patientHomeScreen.getChair")}
            titleStyle={{ ...styles.smallButtonTitle, color: "white" }}
            buttonStyle={{
              ...styles.smallButton,
              backgroundColor: colors.darkGreen,
            }}
            onPress={() => {}}
          />
          <SquareButton
            title={t("patientHomeScreen.reminders")}
            titleStyle={{ ...styles.smallButtonTitle, color: "white" }}
            buttonStyle={{
              ...styles.smallButton,
              backgroundColor: colors.lightGreen,
            }}
            onPress={() => {
              navigation.navigate("Reminders");
            }}
          />
          <MainButton
            title={t("patientHomeScreen.myProfile")}
            titleStyle={styles.profileTitle}
            buttonStyle={styles.myProfileButton}
            onPress={() => {
              navigation.navigate("Profile");
            }}
            icon={{
              name: "person-outline",
              size: 70,
              color: colors.lightBrown,
            }}
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
