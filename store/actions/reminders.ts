import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  Reminder,
  RemindersActionTypes,
} from "../../utilities/types/remindersTypes";
import { EndPoints } from "../../utilities/constants/endpoints";
import { sendNotification } from "./notifications";
import {
  NotificationDescriptions,
  NotificationType,
} from "../../utilities/types/notificationsTypes";
import { ShowModal, isLoading, notLoading } from "./dataStatus";

export const getReminders = createAsyncThunk(
  RemindersActionTypes.GET_ALL,
  async (userId: string, thunkAPI) => {
    try {
      thunkAPI.dispatch(isLoading());

      // TODO: replace static user Id with variable value
      const response = await axios.get(
        `${EndPoints.Reminders}/user/6263ce0577164ec6745e3bd7`
      );

      if (response.data.status === "Success") {
        thunkAPI.dispatch(ShowModal("errorModal.fetchingReminders"));
        throw new Error("can't get reminders");
      }

      const resData = await response.data.data.json();
      const allReminders: Reminder[] = [];
      for (const data in resData) {
        allReminders.push({
          id: data,
          supervisorId: resData[data].supervisorId,
          supervisorName: resData[data].supervisorName,
          patientId: resData[data].patientId,
          reminderBody: resData[data].reminderBody,
          reminderTitle: resData[data].reminderTitle,
        });
      }

      thunkAPI.dispatch(notLoading());
      return allReminders;
    } catch (err) {
      thunkAPI.dispatch(ShowModal("errorModal.fetchingReminders"));
      throw new Error("can't get reminders");
    }
  }
);

export const removeReminder = createAsyncThunk(
  RemindersActionTypes.REMOVE_REMINDER,
  async (reminderId: string, thunkAPI) => {
    try {
      const response = await axios.delete(
        `${EndPoints.Reminders}/${reminderId}`,
        {
          method: "DELETE",
        }
      );

      if (response.data.status === "Success") {
        thunkAPI.dispatch(ShowModal("errorModal.deletingReminder"));
        throw new Error("Can't delete reminder");
      }
      return reminderId;
    } catch (err) {
      thunkAPI.dispatch(ShowModal("errorModal.deletingReminder"));
      throw new Error("Can't delete reminder");
    }
  }
);

export const addReminder = createAsyncThunk(
  RemindersActionTypes.ADD_REMINDER,
  async (newReminder: Reminder, thunkAPI) => {
    try {
      const response = await axios.post(`${EndPoints.Reminders}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReminder),
      });

      if (response.data.status === "Success") {
        thunkAPI.dispatch(ShowModal("errorModal.addingReminder"));
        throw new Error("can't add reminder");
      }

      const resData = await response.data.json();
      const reminder = { ...newReminder, id: resData.name };

      sendNotification({
        title: NotificationType.NEW_REMINDER,
        user_id: newReminder.patientId,
        description: NotificationDescriptions.RECEIVED_NEW_REMINDER,
        type: NotificationType.NEW_REMINDER,
        from_name: newReminder.supervisorName,
      });

      return reminder;
    } catch (err) {
      thunkAPI.dispatch(ShowModal("errorModal.addingReminder"));
      throw new Error("can't add reminder");
    }
  }
);

export const updateReminder = createAsyncThunk(
  RemindersActionTypes.UPDATE_REMINDER,
  async (updatedReminder: Partial<Reminder>, thunkAPI) => {
    try {
      const response = await axios.patch(`${EndPoints.Reminders}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedReminder),
      });

      if (response.status % 100 !== 2) {
        thunkAPI.dispatch(ShowModal("errorModal.updatingReminder"));
        throw new Error("can't update reminders");
      }

      return updatedReminder;
    } catch (err) {
      thunkAPI.dispatch(ShowModal("errorModal.updatingReminder"));
      throw new Error("can't update reminders");
    }
  }
);
