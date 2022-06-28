import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import colors from "../utilities/constants/colors";
import DriveWheel from "../components/freeDriveComponents/DriveWheel";
import fonts from "../utilities/constants/fonts";
import { BackButton } from "../components/buttons/BackButton";
import { FreeDriveProps } from "../utilities/types/navigationTypes/mainNavigationTypes";
import { useDispatch } from "react-redux";
import { initSocket } from "../store/actions/socket";

const FreeDriveScreen = (props: FreeDriveProps) => {
  const dispatch = useDispatch<any>();
  const { navigation } = props;
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(initSocket());
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        testID="backgroundImage"
        source={require("../assets/images/Vector.png")}
        style={styles.backgroundImage}
      >
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
  backgroundImage: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "cover",
    paddingTop: "50%",
    paddingBottom: "20%",
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
