import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { EndPoints } from "../../utilities/constants/endpoints";
import { ShowModal } from "./errorModal";
import {
  NotificationActionTypes,
  NotificationData,
  sentNotification,
} from "../../utilities/types/notificationsTypes";

export const getNotifications = createAsyncThunk(
  NotificationActionTypes.GET_ALL,
  async (userId: string, thunkAPI) => {
    try {
      // TODO: replace static user Id with variable value
      const response = await axios.get(`${EndPoints.notifications}/1`);

      if (response.data.status !== "Success") {
        thunkAPI.dispatch(ShowModal("errorModal.fetchingNotifications"));
        throw new Error("can't get notifications");
      }

      const allNotifications: NotificationData[] = await response.data.data;

      return allNotifications;
    } catch (err) {
      thunkAPI.dispatch(ShowModal("errorModal.fetchingNotifications"));
      throw err;
    }
  }
);

export const removeNotification = createAsyncThunk(
  NotificationActionTypes.REMOVE_NOTIFICATION,
  async (notificationId: string, thunkAPI) => {
    try {
      const response = await axios.delete(
        `${EndPoints.notifications}/${notificationId}`
      );

      if (response.data.status !== "Success") {
        thunkAPI.dispatch(ShowModal("errorModal.deletingNotification"));
        throw new Error("Can't delete notification");
      }
      return notificationId;
    } catch (err) {
      thunkAPI.dispatch(ShowModal("errorModal.deletingNotification"));
      throw err;
    }
  }
);

export const sendNotification = async (newNotifiction: sentNotification) => {
  try {
    const response = await axios.post(`${EndPoints.Notes}`, newNotifiction);

    if (response.data.status !== "Success") {
      throw new Error("can't send notification");
    }
  } catch (err) {
    throw err;
  }
};
