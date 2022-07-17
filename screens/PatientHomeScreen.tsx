import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import colors from "../utilities/constants/colors";
import RNImmediatePhoneCall from "react-native-immediate-phone-call";
import { MainButton } from "../components/buttons/MainButton";
import { SquareButton } from "../components/buttons/SquareButton";
import { PatientHomeProps } from "../utilities/types/navigationTypes/mainNavigationTypes";
import { EmergencyCallModal } from "../components/homeScreenComponents/EmergencyCallModal";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducers/rootReducer";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../utilities/constants/dimentions";
import {
  HeadingText,
  ImportantText,
  ScreenNameText,
  TitleText,
} from "../utilities/types/fontTypes";

const PatientHomeScreen = (props: PatientHomeProps) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const { navigation } = props;
  const { t } = useTranslation();

  const userName = useSelector(
    (state: RootState) => state.user.userData?.userMainData.name
  )?.split(" ")[0];

  const emergencyNumber = useSelector(
    (state: RootState) =>
      state.user.userData?.patientExtraData?.emergency_number
  );

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
        <Text style={styles.mainText} testID="morningText">
          {t("patientHomeScreen.morning")}
          {userName}
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
            onPress={() => {
              navigation.navigate("Map");
            }}
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
              RNImmediatePhoneCall.immediatePhoneCall(emergencyNumber);
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
            onPress={() => {
              navigation.navigate("AddConnection");
            }}
          />
          <SquareButton
            title={t("Health Monitor")}
            titleStyle={{ ...styles.smallButtonTitle, color: "white" }}
            buttonStyle={{
              ...styles.smallButton,
              backgroundColor: colors.lightGreen,
            }}
            onPress={() => {
              navigation.navigate("HealthMonitoring");
            }}
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
            onPress={() => {
              navigation.navigate("HealthStatus");
            }}
            image={{ url: require("../assets/images/health-state.png") }}
          />
          <SquareButton
            title={t("patientHomeScreen.sentInvitations")}
            titleStyle={{ ...styles.smallButtonTitle, color: "white" }}
            buttonStyle={{
              ...styles.smallButton,
              backgroundColor: colors.darkGreen,
            }}
            onPress={() => {
              navigation.navigate("SentInvitations");
            }}
          />
          <SquareButton
            title={t("patientHomeScreen.reminders")}
            titleStyle={{ ...styles.smallButtonTitle, color: "white" }}
            buttonStyle={{
              ...styles.smallButton,
              backgroundColor: colors.lightGreen,
            }}
            onPress={() => {
              navigation.navigate("Reminders", {});
            }}
          />
          <MainButton
            title={t("patientHomeScreen.associatedUsers")}
            titleStyle={styles.profileTitle}
            buttonStyle={styles.myProfileButton}
            onPress={() => {
              navigation.navigate("AssociatedUsers");
            }}
            image={{ url: require("../assets/images/new-patient.png") }}
          />
          <SquareButton
            title={t("settings.settings")}
            titleStyle={{ ...styles.smallButtonTitle, color: "white" }}
            buttonStyle={{
              ...styles.smallButton,
              backgroundColor: colors.lightGreen,
            }}
            onPress={() => {
              navigation.navigate("Settings");
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
    paddingHorizontal: "5%",
    paddingTop: "10%",
    paddingBottom: "20%",
  },
  logo: {
    height: DEVICE_HEIGHT * 0.05,
    resizeMode: "center",
    width: "70%",
    alignSelf: "center",
  },
  mainText: {
    ...HeadingText,
  },
  subText: {
    color: colors.darkGrey,
    ...TitleText,
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
  },
  buttonsCol: {
    flex: 1,
  },
  mainButton: {
    borderRadius: DEVICE_WIDTH * 0.07,
    justifyContent: "center",
    flex: 3,
    margin: "1%",
    padding: "1%",
  },
  smallButton: {
    flex: 1,
    backgroundColor: colors.darkGreen,
    margin: "1%",
  },
  myProfileButton: {
    backgroundColor: colors.darkGreen,
    justifyContent: "center",
    flex: 2,
    borderRadius: DEVICE_WIDTH * 0.07,
    margin: "1%",
  },
  bigButtonTitle: {
    ...ScreenNameText,
    lineHeight: 40,
    textAlign: "center",
  },
  smallButtonTitle: {
    ...TitleText,
  },
  profileTitle: {
    ...ImportantText,
    color: "white",
  },
});

export default PatientHomeScreen;
