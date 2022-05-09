import React from "react";
import { useTranslation } from "react-i18next";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { RoundEdgedButton } from "../components/buttons/RoundEdgedButton";
import colors from "../utilities/constants/colors";
import lang from "../lang";
import { ChangeLangugageProps } from "../utilities/types/navigationTypes/mainNavigationTypes";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../utilities/constants/dimentions";

const SetLanguageScreen = (props: ChangeLangugageProps) => {
  const setLanguage = (language: string) => {
    lang.changeLanguage(language);
  };

  console.log(lang.language);

  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/Vector.png")}
        style={{
          width: DEVICE_WIDTH,
          height: DEVICE_HEIGHT,
          ...styles.container,
        }}
        resizeMethod="auto"
      >
        <RoundEdgedButton
          title="اللغة العربية"
          onPress={() => setLanguage("ar")}
          backgroundColor={
            lang.language === "ar" ? colors.darkPink : colors.darkGreen
          }
        />

        <RoundEdgedButton
          title="English"
          onPress={() => setLanguage("en")}
          backgroundColor={
            lang.language === "en" ? colors.darkPink : colors.darkGreen
          }
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Cairo-Regular",
    color: "black",
    fontSize: 30,
    backgroundColor: colors.darkPink,
    textAlign: "center",
    padding: 20,
    borderRadius: 30,
    width: "80%",
    margin: 20,
  },
});

export default SetLanguageScreen;
