import React from "react";
import { useTranslation } from "react-i18next";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as Linking from "expo-linking";
import { verifyEmail } from "../store/actions/mailVerification";
import { RootState } from "../store/reducers/rootReducer";
import { UserTypes } from "../utilities/types/userTypes";
import { ImportantText, NormalText } from "../utilities/types/fontTypes";
import { MailIsVerififedProps } from "../utilities/types/navigationTypes/getStartedNavigationTypes";

const MailIsVerififedScreen = (props: MailIsVerififedProps) => {
  const { navigation } = props;
  const link = Linking.useURL();
  const dispatch = useDispatch<any>();

  const userdata = useSelector((state: RootState) => state.user.userData);
  const type = userdata?.userType!;

  const userType = type === UserTypes.PATIENT ? "Patient" : "Supervisor";
  const user_id = userdata?.userMainData._id!;
  const emailAddress = userdata?.userMainData.email!;
  const password = userdata?.userMainData.password!;

  if (link) {
    const token = Linking.parse(link!).queryParams!.token?.toString()!;
    dispatch(
      verifyEmail({
        verificationToken: token,
        userType,
        user_id,
        signInData: { emailAddress, password, type, navigation },
      })
    );
  }

  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/Vector.png")}
        style={styles.backgroundImage}
      >
        <Image
          source={require("../assets/images/check.png")}
          style={styles.image}
        />
        <Text style={ImportantText}>{t("mailIsVerified.successText")}</Text>
        <Text style={NormalText}>{t("mailIsVerified.loginText")}</Text>
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
    marginVertical: "10%",
    width: "90%",
    height: "40%",
  },
});

export default MailIsVerififedScreen;
