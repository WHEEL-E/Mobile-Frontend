import React from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useTranslation } from "react-i18next";
import colors from "../constants/colors";
import DriveWheel from "../components/UI/freeDriveComponents/DriveWheel";
import fonts from "../constants/fonts";
import { BackButton } from "../components/UI/BackButton";

const FreeDriveScreen = (props: any) => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.backButton}>
        <BackButton onPress={() => props.navigation.goBack()} />
      </View>
      <ImageBackground
        testID="backgroundImage"
        source={require("../assets/Vector.png")}
        style={styles.backgroundImage}
      >
        <Text style={styles.title}>{t("freeDrive")}</Text>
        <DriveWheel />
        <Text testID="instructionText" style={styles.text}>
          {t("freeDriveText")}
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
