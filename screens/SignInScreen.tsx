import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useTranslation } from "react-i18next";
import lang from "../lang";
import InputField from "../components/InputField";
import RoundEdgedButton from "../components/buttons/RoundEdgedButton";
import colors from "../utilities/constants/colors";
import fonts from "../utilities/constants/fonts";
import { BackButton } from "../components/buttons/BackButton";
import { SignInProps } from "../navigation/navigationUtils";
import { DEVICE_HEIGHT } from "../utilities/constants/dimentions";

const SignInScreen = (props: SignInProps) => {
  const { t } = useTranslation();
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/vector-back.png")}
        style={styles.backgroundImage}
      >
        <Image
          style={styles.logo}
          source={require("../assets/images/logo-b-app.png")}
        />
        <Text style={styles.title}>{t("WelcomeBack")}</Text>
      </ImageBackground>
      <View style={styles.backButton}>
        <BackButton onPress={() => props.navigation.goBack()} />
      </View>
      <View style={styles.buttons}>
        <InputField
          placeHolder={t("emailAddress")}
          fieldStyle={styles.inputField}
          onChangeText={() => {}}
          autoComplete="email"
          value=""
        />
        <InputField
          placeHolder={t("password")}
          fieldStyle={styles.inputField}
          onChangeText={() => {}}
          autoComplete="password"
          value=""
        />
        <RoundEdgedButton
          title={t("logIn")}
          onPress={() => {
            navigation.navigate("Home");
          }}
          backgroundColor={colors.darkGreen}
        />
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>{t("forgotPassword")}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signUp}>
        <Text style={styles.notMemberText}>{t("notMember")}</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.signUpText}>{t("signUp")}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  backgroundImage: {
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "center",
    paddingVertical: "30%",
    width: "100%",
  },
  backButton: {
    position: "absolute",
    top: "7%",
    left: "8%",
  },
  logo: {
    height: 40,
    resizeMode: "center",
    width: "70%",
    alignSelf: "center",
  },
  inputField: {
    width: "80%",
    height: 70,
    marginVertical: 10,
  },
  title: {
    fontSize: 27,
    fontFamily: "Cairo-Bold",
  },
  buttons: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flex: 1,
  },
  forgotPasswordText: {
    fontFamily: fonts.CairoRegular,
    paddingHorizontal: 5,
    fontSize: DEVICE_HEIGHT * 0.02,
  },
  signUp: {
    flexDirection: lang.language == "en" ? "row" : "row-reverse",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  notMemberText: {
    fontFamily: fonts.CairoRegular,
    paddingHorizontal: 5,
    fontSize: DEVICE_HEIGHT * 0.025,
  },
  signUpText: {
    fontFamily: fonts.CairoRegular,
    paddingHorizontal: 5,
    fontSize: DEVICE_HEIGHT * 0.025,
    color: colors.darkGreen,
  },
});

export default SignInScreen;
