import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { PatientRemindersProps } from "../navigation/navigationUtils";
import { BackButton } from "../components/UI/BackButton";
import ReminderCard from "../components/UI/ReminderCard";
import colors from "../constants/colors";

const PatientRemindersScreen = (props: PatientRemindersProps) => {
  // Always false here
  const [modalVisible, setModalVisible] = useState(false);
  // gotten dynamically from the DB
  const [reminders, setReminders] = useState([
    {
      id: "r1",
      sender: "Emelia",
      reminderTitle: "Take the medicine",
      reminderBody: "Medicine at noon, stretches at evening.",
    },
    {
      id: "r2",
      sender: "Elsia",
      reminderTitle: "Take the medicine",
      reminderBody:
        "Medicine at noon, stretches at evening.Medicine at noon, stretches at evening.Medicine at noon, stretches at evening.",
    },
  ]);
  // hits the db here for saving
  const EditReminderHandler = (newReminder: string) => {
    if (newReminder.length === 0) {
      return;
    }
  };

  // hits the db here for deletion
  const deleteReminderHandler = (id: string) => {
    setReminders((currentReminders) => {
      return currentReminders.filter((reminder) => reminder.id != id);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.backButton}>
        <BackButton
          color="#000"
          size={35}
          onPress={() => props.navigation.goBack()}
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Reminders</Text>
        <FlatList
          contentContainerStyle={styles.listContainer}
          data={reminders}
          keyExtractor={(itemData) => itemData.id}
          renderItem={(itemData) => {
            return (
              <ReminderCard
                identifier={itemData.item.id}
                sender={itemData.item.sender}
                reminderTitle={itemData.item.reminderTitle}
                reminderBody={itemData.item.reminderBody}
                backgroundColor={colors.darkGreen}
                onDelete={deleteReminderHandler.bind(this, itemData.item.id)}
                enableEdit={false}
                onSave={() => {}}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default PatientRemindersScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
    flexDirection: "column",
    flex: 1,
  },
  content: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: 27,
    fontFamily: "Cairo-Bold",
  },
  backButton: {
    marginTop: 20,
    marginLeft: 20,
  },
  listContainer: {
    width: "100%",
    alignItems: "center",
  },
});
