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
import { GetStartedProps } from "../utilities/navigationUtils/getStartedNavigationUtils";
import RoundEdgedButton from "../components/buttons/RoundEdgedButton";
import colors from "../utilities/constants/colors";

const GetStartedScreen = (props: GetStartedProps) => {
  const { navigation } = props;
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/Cover.jpg")}
          style={styles.cover}
        />
      </View>
      <Text style={styles.title}>{t("getStartedScreen.wheelE")}</Text>
      <Text style={styles.slogan}>{t("getStartedScreen.wheelEFeautures")}</Text>
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
  );
};

GetStartedScreen.navigationOptions = {
  headerTransparent: true,
  headerStyle: {
    borderBottomWidth: 0,
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 23,
    fontFamily: "Cairo-Bold",
  },
  buttons: {
    margin: 10,
    width: 200,
    alignItems: "center",
  },
  cover: {
    height: "100%",
    width: "100%",
  },
  imageContainer: {
    width: "100%",
    height: Platform.OS === "android" ? "75%" : "70%",
    alignItems: "center",
  },
  slogan: {
    fontFamily: "Cairo-Light",
    fontSize: 18,
    textAlign: "center",
    paddingHorizontal: 10,
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
  },
});

export default GetStartedScreen;
