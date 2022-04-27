import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Keyboard,
  EmitterSubscription,
} from "react-native";
import { useTranslation } from "react-i18next";
import InputField from "../components/inputs/InputField";
import RoundEdgedButton from "../components/buttons/RoundEdgedButton";
import colors from "../utilities/constants/colors";
import fonts from "../utilities/constants/fonts";
import { BackButton } from "../components/buttons/BackButton";
import { SignInProps } from "../utilities/types/navigationTypes/getStartedNavigationTypes";
import { DEVICE_HEIGHT } from "../utilities/constants/dimentions";
import { useAuth } from "../context/AuthContext";
import { validateMail, validatePassword } from "../utilities/dataValidators";

const SignInScreen = (props: SignInProps) => {
  const { t } = useTranslation();
  const { navigation } = props;
  const { signIn } = useAuth();

  const [userData, setUserData] = React.useState({
    emailAddress: "",
    password: "",
  });

  const [isValid, setIsValid] = React.useState({
    emailAddress: true,
    password: true,
  });

  const [isKeyBoardShown, setIsKeyBoardShown] = React.useState(false);

  const signInHandler = () => {
    if (
      userData.emailAddress &&
      userData.password &&
      isValid.emailAddress &&
      isValid.password
    ) {
      signIn(userData);
    }
  };

  React.useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setIsKeyBoardShown(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setIsKeyBoardShown(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

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
        <Text style={styles.title}>{t("signInScreen.WelcomeBack")}</Text>
      </ImageBackground>
      <View style={styles.backButton}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.inputs}>
        <InputField
          placeHolder={t("signInScreen.emailAddress")}
          fieldStyle={styles.inputField}
          onChangeText={(text) => {
            setUserData({ ...userData, emailAddress: text });
            setIsValid({ ...isValid, emailAddress: validateMail(text) });
          }}
          autoComplete="email"
          value={userData.emailAddress}
          onBlur={() => validatePassword(userData.emailAddress)}
        />
        {!isValid.emailAddress && (
          <Text style={styles.validationText}>
            {t("signInScreen.enterValidEmail")}
          </Text>
        )}
        <InputField
          placeHolder={t("signInScreen.password")}
          fieldStyle={styles.inputField}
          onChangeText={(text) => {
            setUserData({ ...userData, password: text });
            setIsValid({ ...isValid, password: validatePassword(text) });
          }}
          autoComplete="password"
          value={userData.password}
          secureText
          onBlur={() => validatePassword(userData.password)}
        />
        {!isValid.password && (
          <Text style={styles.validationText}>
            {t("signInScreen.enterPassword")}
          </Text>
        )}
        {!isKeyBoardShown && (
          <View style={styles.buttons}>
            <RoundEdgedButton
              title={t("signInScreen.logIn")}
              onPress={signInHandler}
              backgroundColor={colors.darkGreen}
            />
            <TouchableOpacity>
              <Text style={styles.forgotPasswordText}>
                {t("signInScreen.forgotPassword")}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      {!isKeyBoardShown && (
        <View style={styles.signUp}>
          <Text style={styles.notMemberText}>
            {t("signInScreen.notMember")}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.signUpText}>{t("signInScreen.signUp")}</Text>
          </TouchableOpacity>
        </View>
      )}
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
    marginBottom: 15,
  },
  title: {
    fontSize: 27,
    fontFamily: "Cairo-Bold",
  },
  inputs: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flex: 1,
  },
  buttons: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  forgotPasswordText: {
    fontFamily: fonts.CairoRegular,
    paddingHorizontal: 5,
    fontSize: DEVICE_HEIGHT * 0.02,
  },
  signUp: {
    flexDirection: "row",
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
  validationText: {
    color: "red",
    fontFamily: fonts.CairoRegular,
  },
});

export default SignInScreen;
