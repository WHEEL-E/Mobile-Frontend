import React from "react";
import {
  Image,
  ImageBackground,
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useTranslation } from "react-i18next";
import InputField from "../components/inputs/InputField";
import { RoundEdgedButton } from "../components/buttons/RoundEdgedButton";
import colors from "../utilities/constants/colors";
import fonts from "../utilities/constants/fonts";
import { BackButton } from "../components/buttons/BackButton";
import { SignInProps } from "../utilities/types/navigationTypes/getStartedNavigationTypes";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../utilities/constants/dimentions";
import { useAuth } from "../context/AuthContext";
import { validateMail, validatePassword } from "../utilities/dataValidators";
import {
  HeadingText,
  ImportantText,
  NormalText,
  NoteText,
  TitleText,
} from "../utilities/types/fontTypes";
import {
  PADDING_HORIZONTAL,
  PADDING_VERTICAL,
  SMALL_MARGIN_VERTICAL,
} from "../utilities/constants/spacing";

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

  let padding = {
    paddingTop: "30%",
    paddingBottom: "10%",
  };

  if (isKeyBoardShown) {
    padding = {
      paddingTop: "15%",
      paddingBottom: "5%",
    };
  } else {
    padding = {
      paddingTop: "30%",
      paddingBottom: "10%",
    };
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        style={styles.container}
        onPress={Keyboard.dismiss}
      >
        <ImageBackground
          source={require("../assets/images/vector-back.png")}
          style={{ ...styles.backgroundImage, ...padding }}
          resizeMode="contain"
          imageStyle={styles.imageStyle}
          resizeMethod="auto"
        >
          <View style={styles.backButton}>
            <BackButton onPress={() => navigation.goBack()} />
          </View>
          <View style={{ width: "100%", alignItems: "center" }}>
            <Image
              style={styles.logo}
              source={require("../assets/images/logo-b-app.png")}
            />
            <Text style={HeadingText}>{t("signInScreen.WelcomeBack")}</Text>
          </View>

          <View style={styles.inputs}>
            <InputField
              placeHolder={t("signInScreen.emailAddress")}
              fieldStyle={styles.inputField}
              onChangeText={(text) => {
                setUserData({ ...userData, emailAddress: text });
                setIsValid({
                  ...isValid,
                  emailAddress: validateMail(text) ? false : true,
                });
              }}
              autoComplete="email"
              value={userData.emailAddress}
              onBlur={() => validateMail(userData.emailAddress)}
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
                setIsValid({
                  ...isValid,
                  password: validatePassword(text) ? false : true,
                });
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
            <View style={styles.buttons}>
              <RoundEdgedButton
                title={t("signInScreen.logIn")}
                onPress={signInHandler}
                backgroundColor={colors.darkGreen}
              />
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ForgetPassword");
                }}
              >
                <Text style={styles.forgotPasswordText}>
                  {t("signInScreen.forgotPassword")}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {!isKeyBoardShown && (
            <View style={styles.signUp}>
              <Text style={styles.notMemberText}>
                {t("signInScreen.notMember")}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                <Text style={styles.signUpText}>
                  {t("signInScreen.signUp")}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </ImageBackground>
      </TouchableWithoutFeedback>
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
    flex: 1,
    alignSelf: "center",
    width: "100%",
  },
  imageStyle: {
    borderColor: "red",
    position: "absolute",
    top: 0,
    width: DEVICE_WIDTH,
    height: DEVICE_WIDTH * 0.7,
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
    maxHeight: "30%",
    marginBottom: SMALL_MARGIN_VERTICAL * 2,
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
    ...NoteText,
    marginVertical: SMALL_MARGIN_VERTICAL,
    paddingHorizontal: PADDING_HORIZONTAL,
  },
  signUp: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: PADDING_VERTICAL,
  },
  notMemberText: {
    ...NormalText,
    paddingHorizontal: PADDING_HORIZONTAL,
  },
  signUpText: {
    ...NormalText,
    paddingHorizontal: PADDING_HORIZONTAL,
    color: colors.darkGreen,
  },
  validationText: {
    color: "red",
    ...NoteText,
  },
});

export default SignInScreen;
