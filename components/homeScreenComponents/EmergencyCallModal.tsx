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
import { ModalBase } from "../generalComponents/ModalBase";
import { RoundEdgedButton } from "../buttons/RoundEdgedButton";

export const EmergencyCallModal = (props: EmergencyCallModalProps) => {
  const { isModalVisible, setIsModalVisible } = props;
  const { t } = useTranslation();

  return (
    <ModalBase
      modalVisible={isModalVisible}
      setModalVisible={setIsModalVisible}
    >
      <Image
        source={require("../../assets/images/logo-b-app.png")}
        style={styles.image}
      />
      <WarningIcon />
      <Text style={styles.mainText}>{t("emergencyCallModal.mainText")}</Text>
      <Text style={styles.subText}>{t("emergencyCallModal.subText")}</Text>
      <RoundEdgedButton
        title={t("emergencyCallModal.gotIt")}
        backgroundColor={colors.darkPink}
        onPress={() => setIsModalVisible(false)}
      />
    </ModalBase>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "center",
    width: "80%",
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
});
