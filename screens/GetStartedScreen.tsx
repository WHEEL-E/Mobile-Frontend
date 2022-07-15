import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  TouchableOpacity,
} from "react-native";
import { useTranslation } from "react-i18next";
import { GetStartedProps } from "../utilities/types/navigationTypes/getStartedNavigationTypes";
import { RoundEdgedButton } from "../components/buttons/RoundEdgedButton";
import colors from "../utilities/constants/colors";
import { DEVICE_HEIGHT } from "../utilities/constants/dimentions";
import { ImportantText, NormalText } from "../utilities/types/fontTypes";

const GetStartedScreen = (props: GetStartedProps) => {
  const { navigation } = props;
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/Cover.png")}
        style={styles.cover}
        resizeMode="cover"
      />
      <View
        style={{
          width: "90%",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <Text style={styles.title}>{t("getStartedScreen.wheelE")}</Text>
        <Text style={styles.slogan}>
          {t("getStartedScreen.wheelEFeautures")}
        </Text>
        <RoundEdgedButton
          title={t("getStartedScreen.getStarted")}
          backgroundColor={colors.lightGreen}
          onPress={() => navigation.navigate("SignIn")}
        />
        <View style={styles.signUpContainer}>
          <Text>{t("getStartedScreen.notMember")} </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={{ color: colors.darkGreen }}>
              {t("getStartedScreen.signUp")}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    ...ImportantText,
  },
  cover: {
    width: "100%",
    height: "64%",
  },
  slogan: {
    ...NormalText,
    textAlign: "center",
    paddingHorizontal: "5%",
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "5%",
  },
});

export default GetStartedScreen;
