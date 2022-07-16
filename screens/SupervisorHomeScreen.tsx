import React from "react";
import { RootState } from "../store/reducers/rootReducer";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import { SupervisorHomeProps } from "../utilities/types/navigationTypes/mainNavigationTypes";
import { MainButton } from "../components/buttons/MainButton";
import colors from "../utilities/constants/colors";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { ImportantText, NormalText } from "../utilities/types/fontTypes";
import { DEVICE_WIDTH } from "../utilities/constants/dimentions";

const SupervisorHomeScreen = (props: SupervisorHomeProps) => {
  const { navigation } = props;
  const { t } = useTranslation();
  const userName = useSelector(
    (state: RootState) => state.user.userData?.userMainData.name
  )?.split(" ")[0];

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/Doctor4.png")}
        resizeMode="contain"
        style={styles.coverImage}
      />
      <View>
        <Text style={styles.title} testID="morningText">
          {t("supervisorHomeScreen.morning")} {userName}
        </Text>
        <Text style={styles.normalText} testID="welcomeText">
          {t("supervisorHomeScreen.wishGoodDay")}
        </Text>
      </View>

      <View style={styles.buttons}>
        <View style={styles.buttonColContainer}>
          <MainButton
            title={t("settings.settings")}
            buttonStyle={styles.profileButtonStyle}
            titleStyle={styles.profileTitleStyle}
            onPress={() => props.navigation.navigate("Settings")}
            icon={{
              name: "ios-settings-outline",
              size: 30,
              color: colors.darkGreen,
            }}
          />
          <MainButton
            title={t("supervisorHomeScreen.invitation")}
            buttonStyle={styles.patientButtonStyle}
            titleStyle={styles.patientTitleStyle}
            onPress={() => navigation.navigate("RecievedInvitations")}
            image={{
              url: require("../assets/images/new-patient.png"),
            }}
          />
        </View>
        <View style={styles.buttonColContainer}>
          <MainButton
            title={t("supervisorHomeScreen.patientsStatus")}
            buttonStyle={styles.statusButtonStyle}
            titleStyle={styles.statusTitleStyle}
            onPress={() => navigation.navigate("AssociatedUsers")}
            image={{
              url: require("../assets/images/health-record.png"),
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
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "25%",
  },
  title: {
    ...ImportantText,
    textAlign: "center",
  },
  normalText: {
    ...NormalText,
    textAlign: "center",
  },
  buttons: {
    flexDirection: "row",
    width: "80%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonColContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "1%",
  },
  coverImage: {
    flex: 2,
    width: "150%",
  },
  profileButtonStyle: {
    backgroundColor: "#E7D9EA",
    borderRadius: DEVICE_WIDTH * 0.06,
    justifyContent: "center",
    padding: "5%",
    flex: 1,
    width: "100%",
    marginVertical: "1%",
  },
  profileTitleStyle: {
    color: colors.darkGreen,
    textAlign: "center",
    ...ImportantText,
  },
  patientButtonStyle: {
    backgroundColor: colors.darkGreen,
    borderRadius: DEVICE_WIDTH * 0.06,
    justifyContent: "center",
    padding: "5%",
    flex: 2,
    width: "100%",
    marginVertical: "1%",
  },
  patientTitleStyle: {
    color: "white",
    ...ImportantText,
    textAlign: "center",
  },
  statusButtonStyle: {
    flex: 1,
    backgroundColor: colors.darkGreen,
    borderRadius: DEVICE_WIDTH * 0.06,
    justifyContent: "center",
    width: "100%",
    padding: "5%",
  },
  statusTitleStyle: {
    textAlign: "center",
    ...ImportantText,
    color: "white",
  },
});

export default SupervisorHomeScreen;
