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
import { sendInvitation } from "../../store/actions/invitations";
import { ModalBase } from "../generalComponents/ModalBase";

export const AddUserModal = (props: AddUserModalProps) => {
  const { name, id, modalVisible, setModalVisible } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch<any>();

  const sendingId = useSelector(
    (state: RootState) => state.user.userData?.userMainData._id
  );

  const submitHandler = () => {
    dispatch(
      sendInvitation({ to_id: id, from_id: sendingId!, user_name: name })
    );
    setModalVisible(false);
  };
  return (
    <ModalBase modalVisible={modalVisible} setModalVisible={setModalVisible}>
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
    </ModalBase>
  );
};

const styles = StyleSheet.create({
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
    height: DEVICE_WIDTH * 0.122,
  },
  sendButton: {
    backgroundColor: colors.lightGreen,
    flex: 1,
    height: DEVICE_WIDTH * 0.122,
  },
  buttonsList: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "10%",
    paddingHorizontal: "10%",
  },
  buttonTitleStyle: {
    ...NormalText,
    color: "#fff",
  },
});
