import React from "react";
import { StyleSheet, View, Modal, Text } from "react-native";
import colors from "../../utilities/constants/colors";
import InputField from "../InputField";
import { SquareButton } from "../buttons/SquareButton";

interface EditReminderModalProps {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
  identifier: string;
  reminderTitleEdit: string;
  editTitleHandler: (body: string) => void;
  reminderBodyEdit: string;
  editBodyHandler: (body: string) => void;
  onSave: (
    reminderId: string,
    newReminderTitle: string,
    newReminderBody: string
  ) => void;
}

const EditReminderModal = (props: EditReminderModalProps) => {
  const {
    modalVisible,
    setModalVisible,
    identifier,
    reminderTitleEdit,
    editTitleHandler,
    reminderBodyEdit,
    editBodyHandler,
    onSave,
  } = props;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Edit Reminder</Text>
          <InputField
            fieldStyle={{ marginBottom: 10, width: 250 }}
            value={reminderTitleEdit}
            onChangeText={editTitleHandler}
            autoComplete="off"
            placeHolder=""
          />
          <InputField
            fieldStyle={{ marginBottom: 10, width: 250 }}
            value={reminderBodyEdit}
            onChangeText={editBodyHandler}
            autoComplete="off"
            placeHolder=""
          />
          <View style={styles.buttonsList}>
            <SquareButton
              title="Dismiss"
              titleStyle={{ color: "#fff" }}
              onPress={() => setModalVisible(!modalVisible)}
              buttonStyle={styles.dismissButton}
            />
            <SquareButton
              title="Save"
              titleStyle={{ color: "#fff" }}
              onPress={onSave.bind(
                this,
                identifier,
                reminderTitleEdit,
                reminderBodyEdit
              )}
              buttonStyle={styles.saveButton}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default EditReminderModal;

const styles = StyleSheet.create({
  modalTitle: {
    fontFamily: "Cairo-SemiBold",
    fontSize: 18,
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
  },
  buttonsList: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 25,
  },
  dismissButton: {
    backgroundColor: colors.darkPink,
    width: 100,
    height: 50,
  },
  saveButton: {
    backgroundColor: colors.lightGreen,
    width: 100,
    height: 50,
  },
});
