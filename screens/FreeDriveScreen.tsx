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
import DriveWheel from "../components/UI/DriveWheel";
import fonts from "../constants/fonts";

const FreeDriveScreen = (props: any) => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/Vector.png")}
        style={styles.backgroundImage}
      >
        <Text style={styles.title}>{t("freeDrive")}</Text>
        <DriveWheel />
        <Text style={styles.text}>{t("freeDriveText")}</Text>
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
  stopButton: {
    backgroundColor: colors.darkPink,
    height: 80,
    width: Dimensions.get("screen").width * 0.9,
  },
  stopTitle: {
    fontFamily: fonts.CairoExtraBold,
    fontSize: 40,
    color: "white",
  },
  text: {
    color: colors.darkGreen,
    fontFamily: fonts.CairoRegular,
    lineHeight: 20,
  },
});
export default FreeDriveScreen;
