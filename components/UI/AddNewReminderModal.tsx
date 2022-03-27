import React from "react";
import { StyleSheet, Modal, Text, View } from "react-native";
import { SquareButton } from "../UI/squareButton";
import InputField from "../UI/InputField";
import colors from "../../constants/colors";

interface addNewReminderModalProps {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
  reminderTitleEdit: string;
  editTitleHandler: (title: string) => void;
  reminderBodyEdit: string;
  editBodyHandler: (body: string) => void;
  addNewReminderHandler: (
    reminderTitleEdit: string,
    reminderBodyEdit: string
  ) => void;
}

const AddNewReminderModal = (props: addNewReminderModalProps) => {
  const {
    modalVisible,
    setModalVisible,
    reminderTitleEdit,
    editTitleHandler,
    reminderBodyEdit,
    editBodyHandler,
    addNewReminderHandler,
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
          <Text style={styles.modalTitle}>
            Type any information you need to remind your patient with
          </Text>
          <InputField
            placeHolder="Enter Reminder Title"
            value={reminderTitleEdit}
            onChangeText={editTitleHandler}
            fieldStyle={{ width: "100%", marginBottom: 10 }}
            autoComplete="off"
          />
          <InputField
            placeHolder="Enter Reminder Description"
            value={reminderBodyEdit}
            onChangeText={editBodyHandler}
            fieldStyle={{ width: "100%", height: 100 }}
            autoComplete="off"
          />
          <View style={styles.buttonsList}>
            <SquareButton
              title="cancel"
              titleStyle={{ color: "#fff" }}
              onPress={() => setModalVisible(!modalVisible)}
              buttonStyle={styles.cancelButton}
            />
            <SquareButton
              title="send"
              titleStyle={{ color: "#fff" }}
              onPress={() =>
                addNewReminderHandler(reminderTitleEdit, reminderBodyEdit)
              }
              buttonStyle={styles.sendButton}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddNewReminderModal;

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
