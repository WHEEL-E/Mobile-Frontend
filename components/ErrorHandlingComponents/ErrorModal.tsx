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
import { useDispatch, useSelector } from "react-redux";
import colors from "../../utilities/constants/colors";
import {
  DEVICE_HEIGHT,
  DEVICE_WIDTH,
} from "../../utilities/constants/dimentions";
import fonts from "../../utilities/constants/fonts";
import { SquareButton } from "../buttons/SquareButton";
import { hideModal } from "../../store/actions/dataStatus";
import { RootState } from "../../store/reducers/rootReducer";
import { Ionicons } from "@expo/vector-icons";

export const ErrorModal = () => {
  const content = useSelector((store: RootState) => store.dataStatus.content);
  const isVisible = useSelector(
    (store: RootState) => store.dataStatus.isVisible
  );
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.mainView}>
        <ImageBackground
          source={require("../../assets/images/Union.png")}
          style={styles.background}
        >
          <Image
            source={require("../../assets/images/logo-b-app.png")}
            style={styles.image}
          />
          <View style={styles.titleView}>
            <Ionicons
              name="close-circle"
              color={colors.darkPink}
              size={DEVICE_WIDTH * 0.2}
            />
            <Text style={styles.title}>{t("errorModal.oops")}</Text>
          </View>
        </ImageBackground>
        <Text style={styles.mainText}>{t(content)}</Text>
        <SquareButton
          title={t("errorModal.gotIt")}
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
          onPress={() => dispatch(hideModal())}
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
  },
  titleView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "black",
    fontFamily: fonts.CairoBold,
    fontSize: DEVICE_WIDTH * 0.08,
    textAlign: "center",
  },
  mainText: {
    color: colors.darkBlue,
    fontFamily: fonts.CairoBold,
    fontSize: DEVICE_WIDTH * 0.04,
    textAlign: "center",
    lineHeight: DEVICE_WIDTH * 0.06,
  },
  button: {
    backgroundColor: colors.darkPink,
    width: "100%",
    height: "20%",
    borderRadius: 30,
    marginVertical: "5%",
  },
  buttonTitle: {
    fontSize: DEVICE_WIDTH * 0.08,
    fontFamily: fonts.CairoBold,
    textAlign: "center",
    color: "white",
  },
});
