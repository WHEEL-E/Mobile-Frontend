import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import colors from "../utilities/constants/colors";
import DriveWheel from "../components/freeDriveComponents/DriveWheel";
import fonts from "../utilities/constants/fonts";
import { BackButton } from "../components/buttons/BackButton";
import { FreeDriveProps } from "../utilities/navigationUtils/mainNavigationUtils";

const FreeDriveScreen = (props: FreeDriveProps) => {
  const { navigation } = props;
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.backButton}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <ImageBackground
        testID="backgroundImage"
        source={require("../assets/images/Vector.png")}
        style={styles.backgroundImage}
      >
        <Text style={styles.title}>{t("freeDriveScreen.freeDrive")}</Text>
        <DriveWheel />
        <Text testID="instructionText" style={styles.text}>
          {t("freeDriveScreen.freeDriveText")}
        </Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  backButton: {
    position: "absolute",
    top: "7%",
    left: "8%",
  },
  backgroundImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "cover",
    padding: "10%",
  },
  title: {
    fontSize: 35,
    fontFamily: "Cairo-Bold",
  },
  text: {
    color: colors.darkGreen,
    fontFamily: fonts.CairoRegular,
    lineHeight: 20,
  },
});
export default FreeDriveScreen;
