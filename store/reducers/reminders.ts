import { createReducer } from "@reduxjs/toolkit";
import { Reminder, RemindersState } from "../../utilities/types/remindersTypes";
import {
  addReminder,
  getReminders,
  removeReminder,
  updateReminder,
} from "../actions/reminders";

const initialState: RemindersState = {
  allReminders: [],
};

const remindersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getReminders.fulfilled, (state, action) => {
      return { allReminders: action.payload };
    })
    .addCase(addReminder.fulfilled, (state, action) => {
      const newReminder = action.payload;

      const allReminders = [...state.allReminders, newReminder];
      return {
        allReminders,
      };
    })
    .addCase(removeReminder.fulfilled, (state, action) => {
      const removedReminder = action.payload;
      const newReminders = [...state.allReminders].filter(
        (reminder) => reminder.reminder._id !== removedReminder
      );
      return {
        allReminders: newReminders,
      };
    })
    .addCase(updateReminder.fulfilled, (state, action) => {
      const updatedReminder = action.payload;
      const updatedReminders = [...state.allReminders];
      const updatedReminderIndex = updatedReminders.findIndex(
        (reminder) => reminder.reminder._id === updatedReminder._id
      );
      console.log(updatedReminderIndex);
      if (updatedReminderIndex > -1) {
        const oldreminder: Reminder = updatedReminders[updatedReminderIndex];
        const newReminder: Reminder = {
          reminder: { ...oldreminder.reminder, ...updatedReminder },
          supervisorName: oldreminder.supervisorName,
          patientName: oldreminder.patientName,
        };
        console.log(newReminder);
        updatedReminders[updatedReminderIndex] = newReminder;
      }

      return {
        allReminders: updatedReminders,
      };
    });
});

export default remindersReducer;
