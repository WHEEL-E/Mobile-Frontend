import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Text,
  TouchableOpacity,
  Modal,
  Alert,
} from "react-native";
import colors from "../../constants/colors";
import { SquareButton } from "../../components/UI/squareButton";
import InputField from "./InputField";

interface IReminderCardProps {
  identifier: string;
  sender: string;
  reminderTitle: string;
  reminderBody: string;
  backgroundColor: string;
  onDelete: () => void;
  onSave: (
    reminderId: string,
    newReminderTitle: string,
    newReminderBody: string
  ) => void;
  enableEdit?: boolean;
}

const ReminderCard = (props: IReminderCardProps) => {
  const {
    identifier,
    sender,
    reminderTitle,
    reminderBody,
    backgroundColor,
    onDelete,
    enableEdit,
    onSave,
  } = props;

  const [modalVisible, setModalVisible] = useState(false);
  const [reminderTitleEdit, setReminderTitle] = useState(reminderTitle);
  const [reminderBodyEdit, setReminderBody] = useState(reminderBody);

  const editTitleHandler = (title: string) => {
    setReminderTitle(title);
  };

  const editBodyHandler = (body: string) => {
    setReminderBody(body);
  };

  return (
    <View style={{ ...styles.container, backgroundColor }}>
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
                title="Dismess"
                titleStyle={{ color: "#fff" }}
                onPress={() => setModalVisible(!modalVisible)}
                buttonStyle={styles.dismessButton}
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
      <TouchableOpacity onPress={onDelete} style={styles.close}>
        <Ionicons name="ios-close" color="#fff" size={25} />
      </TouchableOpacity>
      <Text
        style={
          backgroundColor === colors.darkGreen
            ? styles.whiteTitle
            : styles.title
        }
      >
        From {sender}
      </Text>
      <Text
        style={
          backgroundColor === colors.darkGreen
            ? styles.whiteTitle
            : styles.title
        }
      >
        {reminderTitle}
      </Text>
      <Text
        style={
          backgroundColor === colors.darkGreen ? styles.whiteBody : styles.body
        }
      >
        {reminderBody}
      </Text>
      {enableEdit && (
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.edit}
        >
          <Ionicons name="ios-create" color="#fff" size={30} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ReminderCard;

const styles = StyleSheet.create({
  container: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    flexDirection: "column",
    justifyContent: "center",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    marginVertical: 10,
    padding: 10,
    overflow: "hidden",
    width: 320,
  },
  title: { fontFamily: "Cairo-Bold", fontSize: 18, color: colors.darkGreen },
  whiteTitle: { fontFamily: "Cairo-Bold", fontSize: 18, color: "#fff" },
  body: { fontFamily: "Cairo-Regular", fontSize: 15, color: colors.darkGreen },
  whiteBody: { fontFamily: "Cairo-Regular", fontSize: 15, color: "#fff" },
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
  content: {
    flexDirection: "column",
    justifyContent: "center",
  },
  close: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  edit: {
    marginVertical: 5,
  },
  buttonsList: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 25,
  },
  dismessButton: {
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
