import React from "react";
import {
  Image,
  ImageBackground,
  Modal,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useTranslation } from "react-i18next";
import colors from "../../utilities/constants/colors";
import {
  DEVICE_HEIGHT,
  DEVICE_WIDTH,
} from "../../utilities/constants/dimentions";
import fonts from "../../utilities/constants/fonts";
import { EmergencyCallModalProps } from "../../utilities/types/componentsTypes";
import { SquareButton } from "../buttons/SquareButton";
import { WarningIcon } from "./WarningIcon";
import makePhoneCall from "./makePhoneCall";

export const EmergencyCallModal = (props: EmergencyCallModalProps) => {
  const { isModalVisible, setIsModalVisible } = props;
  const { t } = useTranslation();

  React.useEffect(() => {
    makePhoneCall();
  }, []);

  return (
    <Modal animationType="slide" transparent={true} visible={isModalVisible}>
      <View style={styles.mainView}>
        <ImageBackground
          source={require("../../assets/images/Union.png")}
          style={styles.background}
        >
          <Image
            source={require("../../assets/images/logo-b-app.png")}
            style={styles.image}
          />
          <WarningIcon />
        </ImageBackground>
        <Text style={styles.mainText}>{t("emergencyCallModal.mainText")}</Text>
        <Text style={styles.subText}>{t("emergencyCallModal.subText")}</Text>
        <SquareButton
          title={t("emergencyCallModal.gotIt")}
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
          onPress={() => setIsModalVisible(false)}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  mainView: {
    width: "80%",
    height: "50%",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginVertical: "50%",
    borderRadius: 50,
    overflow: "hidden",
    borderWidth: 2,
    paddingHorizontal: "5%",
    paddingBottom: "5%",
  },
  image: {
    flex: 1,
    resizeMode: "center",
    width: "80%",
  },
  background: {
    width: DEVICE_WIDTH * 0.8,
    height: DEVICE_HEIGHT * 0.25,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "cover",
  },
  mainText: {
    color: colors.darkBlue,
    fontFamily: fonts.CairoBold,
    fontSize: DEVICE_WIDTH * 0.04,
    textAlign: "center",
    lineHeight: DEVICE_WIDTH * 0.06,
  },
  subText: {
    fontSize: DEVICE_WIDTH * 0.036,
    textAlign: "center",
    fontFamily: fonts.CairoRegular,
    color: colors.darkBlue,
  },
  button: {
    backgroundColor: colors.darkPink,
    width: "100%",
    height: "20%",
    borderRadius: 30,
  },
  buttonTitle: {
    fontSize: DEVICE_WIDTH * 0.08,
    fontFamily: fonts.CairoBold,
    textAlign: "center",
    color: "white",
  },
});
