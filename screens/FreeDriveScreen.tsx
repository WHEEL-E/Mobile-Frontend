import React, { useEffect } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import colors from "../utilities/constants/colors";
import DriveWheel from "../components/freeDriveComponents/DriveWheel";
import fonts from "../utilities/constants/fonts";
import { FreeDriveProps } from "../utilities/types/navigationTypes/mainNavigationTypes";
import { useDispatch } from "react-redux";
import { initSocket } from "../store/actions/socket";
import { DataStatus } from "../components/generalComponents/DataStatus";
import { NormalText } from "../utilities/types/fontTypes";

const FreeDriveScreen = (props: FreeDriveProps) => {
  const dispatch = useDispatch<any>();
  const { navigation } = props;
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <ImageBackground
        testID="backgroundImage"
        source={require("../assets/images/Vector.png")}
        style={styles.backgroundImage}
      >
        <DataStatus>
          <DriveWheel />
          <Text testID="instructionText" style={styles.text}>
            {t("freeDriveScreen.freeDriveText")}
          </Text>
        </DataStatus>
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
  text: {
    color: colors.darkGreen,
    ...NormalText,
  },
});
export default FreeDriveScreen;
