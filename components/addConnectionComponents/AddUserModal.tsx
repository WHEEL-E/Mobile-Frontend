import React from "react";
import { ImageBackground, Modal, StyleSheet, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../utilities/constants/colors";
import {
  DEVICE_HEIGHT,
  DEVICE_WIDTH,
} from "../../utilities/constants/dimentions";
import fonts from "../../utilities/constants/fonts";
import { SquareButton } from "../buttons/SquareButton";
import { RootState } from "../../store/reducers/rootReducer";
import { AddUserModalProps } from "../../utilities/types/addConnectionTypes";
import { NormalText } from "../../utilities/types/fontTypes";

export const AddUserModal = (props: AddUserModalProps) => {
  const { name, id, modalVisible, setModalVisible } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch<any>();

  const sendingId = useSelector(
    (state: RootState) => state.user.userData?.userMainData.userId
  );

  const submitHandler = () => {
    // TODO: send invitation
    // dispatch(sendConnectionRequest({ receivingId: id, sendingId: sendingId! }));
  };
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.mainView}>
        <ImageBackground
          source={require("../../assets/images/Union.png")}
          style={styles.background}
        >
          <Text style={styles.title}> {t("addConnection.newConnection")}</Text>
          <Ionicons
            name="person-add"
            size={DEVICE_WIDTH * 0.25}
            color={colors.darkBlue}
          />
          <Text style={styles.mainText}>
            {t("addConnection.confirmAddNewUser", { name: name })}
          </Text>
          <View style={styles.buttonsList}>
            <SquareButton
              title={t("addConnection.cancel")}
              titleStyle={styles.buttonTitleStyle}
              onPress={() => setModalVisible(false)}
              buttonStyle={styles.cancelButton}
            />
            <SquareButton
              title={t("addConnection.send")}
              titleStyle={styles.buttonTitleStyle}
              onPress={() => submitHandler()}
              buttonStyle={styles.sendButton}
            />
          </View>
        </ImageBackground>
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
    height: DEVICE_HEIGHT * 0.5,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: "7%",
    paddingVertical: "20%",
  },
  title: {
    flex: 1,
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

  cancelButton: {
    backgroundColor: colors.darkPink,
    flex: 1,
    height: 50,
  },
  sendButton: {
    backgroundColor: colors.lightGreen,
    flex: 1,
    height: 50,
  },
  buttonsList: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 25,
    paddingHorizontal: "10%",
  },
  buttonTitleStyle: {
    ...NormalText,
    color: "#fff",
  },
});
