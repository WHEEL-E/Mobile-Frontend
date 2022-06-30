import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import { RoundEdgedButton } from "../components/buttons/RoundEdgedButton";
import { useCountdown } from "../context/CountDown";
import { signOut } from "../store/actions/user";
import colors from "../utilities/constants/colors";
import { DEVICE_HEIGHT } from "../utilities/constants/dimentions";
import {
  ImportantNote,
  ImportantText,
  NormalText,
  NoteText,
} from "../utilities/types/fontTypes";
import { MailVerificationProps } from "../utilities/types/navigationTypes/getStartedNavigationTypes";

const MailVerificationScreen = (props: MailVerificationProps) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [initialTimer, setInitialTimer] = useState(Date.now() + 5 * 60000);
  const [days, hours, minutes, seconds] = useCountdown(initialTimer);

  const { t } = useTranslation();
  const { navigation } = props;
  const dispatch = useDispatch<any>();

  const resendColor = isDisabled ? colors.darkGrey : colors.darkBlue;

  const resendHandler = () => {
    setIsDisabled(true);
    setInitialTimer(Date.now() + 5 * 60000);
  };

  useEffect(() => {
    if (minutes + seconds <= 0) {
      setIsDisabled(false);
    }
  }, [minutes, seconds]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/Vector.png")}
        style={styles.backgroundImage}
      >
        <Image
          source={require("../assets/images/mailverification.png")}
          resizeMode="center"
          style={styles.image}
        />
        <View style={styles.text}>
          <Text style={styles.mainText}>{t("mailVerification.mainText")}</Text>
          <Text style={styles.descriptionText}>
            {t("mailVerification.description")}
          </Text>
          <View style={styles.resendText}>
            <Text style={styles.question}>
              {t("mailVerification.resendQuestion")}
            </Text>
            <TouchableOpacity disabled={isDisabled} onPress={resendHandler}>
              <Text style={{ ...styles.resend, color: resendColor }}>
                {t("mailVerification.resend")}
              </Text>
            </TouchableOpacity>
          </View>
          {isDisabled && (
            <Text style={styles.counter}>
              {t("mailVerification.counter")}
              {minutes}:{seconds}
            </Text>
          )}
        </View>
        <RoundEdgedButton
          backgroundColor={colors.darkBlue}
          title={t("mailVerification.signUp")}
          onPress={() => {
            dispatch(signOut());
            navigation.navigate("SignUp");
          }}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "cover",
  },
  image: {
    width: "90%",
    height: "40%",
  },
  text: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: "10%",
  },
  mainText: {
    ...ImportantText,
    textAlign: "center",
  },
  descriptionText: {
    ...NormalText,
    textAlign: "center",
    marginVertical: "5%",
    lineHeight: DEVICE_HEIGHT * 0.03,
  },
  resendText: {
    flexDirection: "row",
  },
  question: {
    ...NoteText,
    textAlign: "center",
  },
  resend: {
    ...ImportantNote,
    color: colors.darkBlue,
  },
  counter: {
    ...NoteText,
    textAlign: "center",
    marginBottom: "7%",
  },
});

export default MailVerificationScreen;
