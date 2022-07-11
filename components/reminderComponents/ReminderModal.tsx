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
          _id: "",
          supervisor_id: supervisorData._id!,
          supervisorName: supervisorData.name,
          patient_id: props.patientId!,
        })
      );
    }
    setReminder({ title: "", description: "", due_date: new Date(0) });
    return setModalVisible(false);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>
            {t("remindersScreen.addReminderIntro")}
          </Text>
          <InputField
            placeHolder={t("remindersScreen.enterTitle")}
            value={reminder.title}
            onChangeText={editTitleHandler}
            fieldStyle={{ width: "100%", marginBottom: 10 }}
            autoComplete="off"
          />
          <InputField
            placeHolder={t("remindersScreen.enterDescription")}
            value={reminder.description}
            onChangeText={editBodyHandler}
            fieldStyle={{ width: "100%", height: 100, marginBottom: 10 }}
            autoComplete="off"
          />
          <View style={styles.buttonsList}>
            <SquareButton
              title={t("remindersScreen.cancel")}
              titleStyle={{ color: "#fff" }}
              onPress={() => setModalVisible(false)}
              buttonStyle={styles.cancelButton}
            />
            <SquareButton
              title={t("remindersScreen.submit")}
              titleStyle={{ color: "#fff" }}
              onPress={() => submitHandler()}
              buttonStyle={styles.sendButton}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalTitle: {
    fontFamily: "Cairo-SemiBold",
    fontSize: 18,
    lineHeight: 22,
    textAlign: "center",
    marginBottom: 15,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 320,
  },
  cancelButton: {
    backgroundColor: colors.darkPink,
    width: 100,
    height: 50,
  },
  sendButton: {
    backgroundColor: colors.lightGreen,
    width: 100,
    height: 50,
  },
  buttonsList: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 25,
  },
});

export default ReminderModal;
