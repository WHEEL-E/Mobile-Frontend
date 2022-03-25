import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Modal } from "react-native";
import { SupervisorRemindersProps } from "../navigation/navigationUtils";
import { BackButton } from "../components/UI/BackButton";
import ReminderCard from "../components/UI/ReminderCard";
import colors from "../constants/colors";
import { SquareButton } from "../components/UI/squareButton";
import InputField from "../components/UI/InputField";

const SupervisorRemindersScreen = (props: SupervisorRemindersProps) => {
  // gotten dynamically from the DB
  // the objects may need to be updated upon on how we will set up the connection with the db
  const [reminders, setReminders] = useState([
    {
      id: "r1",
      supervisorId: "Emelia",
      patientId: "Lilo",
      reminderTitle: "Take the medicine",
      reminderBody: "Medicine at noon, stretches at evening.",
    },
    {
      id: "r2",
      supervisorId: "Elsia",
      patientId: "Lilo",
      reminderTitle: "Take the medicine",
      reminderBody:
        "Medicine at noon, stretches at evening.Medicine at noon, stretches at evening.Medicine at noon, stretches at evening.",
    },
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [reminderTitleEdit, setReminderTitle] = useState("");
  const [reminderBodyEdit, setReminderBody] = useState("");

  const editTitleHandler = (title: string) => {
    setReminderTitle(title);
  };

  const editBodyHandler = (body: string) => {
    setReminderBody(body);
  };

  // hits the db here for saving and also update it at the patient UI
  const editReminderHandler = (
    reminderId: string,
    newReminderTitle: string,
    newReminderBody: string
  ) => {
    let newReminders = [...reminders];
    let reminder = newReminders.filter(
      (reminder) => reminder.id === reminderId
    );

    reminder[0].reminderTitle = newReminderTitle;
    reminder[0].reminderBody = newReminderBody;

    setReminders(newReminders);
    return setModalVisible(false);
  };

  // reRenders the UI and hit the db to add a new reminder
  const addNewReminderHandler = (
    reminderTitleEdit: string,
    reminderBodyEdit: string
  ) => {
    const newId = new Date().toString();
    setReminders((currentReminders: any) => {
      return [
        ...currentReminders,
        {
          id: newId,
          supervisorID: "TheSupervisor",
          patientID: "The patient ID",
          reminderTitle: reminderTitleEdit,
          reminderBody: reminderBodyEdit,
        },
      ];
    });
    setReminderTitle("");
    setReminderBody("");
    return setModalVisible(!modalVisible);
  };

  // hits the db here for deletion
  const deleteReminderHandler = (id: string) => {
    setReminders((currentReminders) => {
      return currentReminders.filter((reminder) => reminder.id != id);
    });
  };

  return (
    <View style={styles.container}>
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
      <View style={styles.backButton}>
        <BackButton
          color="#000"
          size={35}
          onPress={() => props.navigation.goBack()}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Reminders</Text>
      </View>

      <FlatList
        contentContainerStyle={styles.listContainer}
        data={reminders}
        keyExtractor={(itemData) => itemData.id}
        renderItem={(itemData) => {
          return (
            <ReminderCard
              identifier={itemData.item.id}
              sender={itemData.item.supervisorId}
              reminderTitle={itemData.item.reminderTitle}
              reminderBody={itemData.item.reminderBody}
              backgroundColor={colors.darkGreen}
              onDelete={deleteReminderHandler.bind(this, itemData.item.id)}
              enableEdit={true}
              onSave={editReminderHandler}
            />
          );
        }}
      />
      <View style={styles.buttonContainer}>
        <SquareButton
          title="Add a reminder"
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.titleStyle}
          onPress={() => setModalVisible(true)}
        />
      </View>
    </View>
  );
};

export default SupervisorRemindersScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
    flexDirection: "column",
    flex: 1,
  },
  title: {
    fontSize: 27,
    fontFamily: "Cairo-Bold",
  },
  titleContainer: {
    alignItems: "center",
  },
  backButton: {
    marginTop: 20,
    marginLeft: 20,
  },
  listContainer: {
    width: "100%",
    alignItems: "center",
  },
  buttonStyle: {
    backgroundColor: colors.lightGreen,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 30,
    width: 300,
    marginHorizontal: 50,
    marginVertical: 5,
    height: 70,
  },
  titleStyle: {
    fontFamily: "Cairo-Bold",
    color: "white",
    fontSize: 20,
  },
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
  buttonContainer: {
    alignItems: "center",
  },
});
