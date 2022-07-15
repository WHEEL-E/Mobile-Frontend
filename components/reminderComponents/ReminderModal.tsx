import React from "react";
import { StyleSheet, Modal, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import { SquareButton } from "../buttons/SquareButton";
import InputField from "../inputs/InputField";
import colors from "../../utilities/constants/colors";
import { ReminderModalProps } from "../../utilities/types/remindersTypes";
import { useDispatch, useSelector } from "react-redux";
import { addReminder, updateReminder } from "../../store/actions/reminders";
import { RootState } from "../../store/reducers/rootReducer";
import { ModalBase } from "../generalComponents/ModalBase";
import {
  HeadingText,
  NormalText,
  TitleText,
} from "../../utilities/types/fontTypes";
import { DEVICE_HEIGHT } from "../../utilities/constants/dimentions";

const ReminderModal = (props: ReminderModalProps) => {
  const { t } = useTranslation();
  const { modalVisible, setModalVisible, reminderData, identifier } = props;
  const dispatch = useDispatch<any>();

  const supervisorData = useSelector(
    (state: RootState) => state.user.userData?.userMainData
  )!;

  const [reminder, setReminder] = React.useState(reminderData);

  const editTitleHandler = (title: string) => {
    setReminder({ ...reminder, title });
  };

  const editBodyHandler = (description: string) => {
    setReminder({ ...reminder, description });
  };

  const submitHandler = () => {
    if (identifier) {
      dispatch(updateReminder({ ...reminder, _id: identifier }));
    } else {
      dispatch(
        addReminder({
          ...reminder,
          supervisor_id: supervisorData._id!,
          patient_id: props.patientId!,
          due_date: new Date(),
        })
      );
    }
    setReminder({ title: "", description: "", due_date: new Date(0) });
    return setModalVisible(false);
  };

  return (
    <ModalBase modalVisible={modalVisible} setModalVisible={setModalVisible}>
      <Text style={styles.modalTitle}>
        {t("remindersScreen.addReminderIntro")}
      </Text>
      <InputField
        placeHolder={t("remindersScreen.enterTitle")}
        value={reminder.title}
        onChangeText={editTitleHandler}
        fieldStyle={styles.inputs}
        autoComplete="off"
      />
      <InputField
        placeHolder={t("remindersScreen.enterDescription")}
        value={reminder.description}
        onChangeText={editBodyHandler}
        fieldStyle={{
          ...styles.inputs,
          height: DEVICE_HEIGHT * 0.15,
        }}
        autoComplete="off"
      />
      <View style={styles.buttonsList}>
        <SquareButton
          title={t("remindersScreen.cancel")}
          titleStyle={{ color: "white", ...NormalText }}
          onPress={() => {
            setModalVisible(false);
            setReminder({ title: "", description: "", due_date: new Date(0) });
          }}
          buttonStyle={styles.cancelButton}
        />
        <SquareButton
          title={t("remindersScreen.submit")}
          titleStyle={{ color: "white", ...NormalText }}
          onPress={() => submitHandler()}
          buttonStyle={styles.sendButton}
        />
      </View>
    </ModalBase>
  );
};

const styles = StyleSheet.create({
  modalTitle: {
    ...TitleText,
    lineHeight: 22,
    textAlign: "center",
    marginBottom: "5%",
  },
  inputs: {
    backgroundColor: "white",
    width: "100%",
    marginBottom: "3%",
  },
  cancelButton: {
    backgroundColor: colors.darkPink,
    width: "30%",
    height: DEVICE_HEIGHT * 0.06,
  },
  sendButton: {
    backgroundColor: colors.lightGreen,
    width: "30%",
    height: DEVICE_HEIGHT * 0.06,
  },
  buttonsList: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "9%",
  },
});

export default ReminderModal;
