import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Modal,
  ImageBackground,
} from "react-native";
import { SupervisorRemindersProps } from "../navigation/navigationUtils";
import { BackButton } from "../components/UI/BackButton";
import ReminderCard from "../components/UI/ReminderCard";
import colors from "../constants/colors";
import { SquareButton } from "../components/UI/squareButton";
import AddNewReminderModal from "../components/UI/AddNewReminderModal";
import { Reminder } from "../types/reminder";

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
  const [editModalVisible, setEditModalVisible] = useState(false);
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
    const newReminders = [...reminders];
    let reminder = newReminders.filter(
      (reminder) => reminder.id === reminderId
    );

    reminder[0].reminderTitle = newReminderTitle;
    reminder[0].reminderBody = newReminderBody;

    setReminders(newReminders);
    return setEditModalVisible(!editModalVisible);
  };

  // reRenders the UI and hit the db to add a new reminder
  const addNewReminderHandler = (
    reminderTitleEdit: string,
    reminderBodyEdit: string
  ) => {
    const newId = new Date().toString();
    setReminders((currentReminders: Array<Reminder>) => {
      return [
        ...currentReminders,
        {
          id: newId,
          supervisorId: "TheSupervisor",
          patientId: "The patient ID",
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
      <AddNewReminderModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        reminderTitleEdit={reminderTitleEdit}
        reminderBodyEdit={reminderBodyEdit}
        editTitleHandler={editTitleHandler}
        editBodyHandler={editBodyHandler}
        addNewReminderHandler={addNewReminderHandler}
      />
      <ImageBackground
        source={require("../assets/cloud-background.png")}
        style={styles.background}
      >
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
                modalVisible={editModalVisible}
                setModalVisible={setEditModalVisible}
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
      </ImageBackground>
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
  background: { width: "100%", height: "100%" },
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
  buttonContainer: {
    alignItems: "center",
  },
});
