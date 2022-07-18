import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers/rootReducer";
import colors from "../../utilities/constants/colors";
import ReminderCard from "./ReminderCard";
import {
  Reminder,
  RemindersListProps,
} from "../../utilities/types/remindersTypes";
import { NoData } from "../generalComponents/NoData";

export const RemindersList = (props: RemindersListProps) => {
  const { enableEdit } = props;

  const reminders: Reminder[] = useSelector(
    (state: RootState) => state.reminders.allReminders
  );

  const noData = reminders.length === 0;

  return (
    <View style={styles.container}>
      {noData && (
        <NoData
          screen={enableEdit ? "remindersSupervisor" : "remindersPatient"}
        />
      )}
      {!noData && (
        <FlatList
          contentContainerStyle={styles.listContainer}
          data={reminders}
          keyExtractor={(itemData) => itemData.reminder._id}
          renderItem={(itemData) => {
            return (
              <ReminderCard
                identifier={itemData.item.reminder._id}
                sender={enableEdit ? undefined : itemData.item.supervisorName}
                receiver={enableEdit ? itemData.item.patientName : undefined}
                title={itemData.item.reminder.title}
                due_date={new Date(itemData.item.reminder.due_date)}
                description={itemData.item.reminder.description}
                backgroundColor={
                  itemData.index % 2 == 0
                    ? colors.darkGreen
                    : colors.lightPurple
                }
                enableEdit={enableEdit}
              />
            );
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  listContainer: {
    width: "100%",
    alignItems: "center",
  },
});
