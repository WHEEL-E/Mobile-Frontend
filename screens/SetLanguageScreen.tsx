import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native";
import SquareButton from "../components/UI/squareButton";
import colors from "../constants/colors";
import i18n from "../i18n";
import { ChangeLangugageProps } from "../navigation/navigationUtils";

const SetLanguageScreen = (props: ChangeLangugageProps) => {
  const setLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <SquareButton
        title="استخدم اللغة العربية"
        onPress={() => setLanguage("ar")}
        buttonStyle={styles.button}
        titleStyle={styles.buttonTitle}
      />
      <SquareButton
        title="use English"
        onPress={() => setLanguage("en")}
        buttonStyle={styles.button}
        titleStyle={styles.buttonTitle}
      />
      <Text style={styles.title}> {t("LanguageText")}</Text>
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
  button: {
    backgroundColor: colors.darkGreen,
    width: 300,
    marginHorizontal: 50,
    marginVertical: 10,
    height: 50,
  },
  buttonTitle: {
    fontFamily: "Cairo-Regular",
    color: "black",
    fontSize: 20,
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
