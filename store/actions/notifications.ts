import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { EndPoints } from "../../utilities/constants/endpoints";
import {
  NotificationActionTypes,
  NotificationData,
  sentNotification,
} from "../../utilities/types/notificationsTypes";
import { ShowModal, isLoading, notLoading } from "./dataStatus";
import { RootState } from "../reducers/rootReducer";

export const getNotifications = createAsyncThunk(
  NotificationActionTypes.GET_ALL,
  async (userId: string, thunkAPI) => {
    try {
      thunkAPI.dispatch(isLoading());

      const { user } = thunkAPI.getState() as RootState;
      const response = await axios.get(`${EndPoints.notifications}/${userId}`, {
        headers: { token: user.userData?.token! },
      });

      if (response.data.status !== "Success") {
        thunkAPI.dispatch(ShowModal("errorModal.fetchingNotifications"));
        throw new Error("can't get notifications");
      }

      const allNotifications: NotificationData[] = await response.data.data;

      thunkAPI.dispatch(notLoading());
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
      const { user } = thunkAPI.getState() as RootState;
      console.log(notificationId);
      const response = await axios.delete(
        `${EndPoints.notifications}/${notificationId}`,
        { headers: { token: user.userData?.token! } }
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

export const sendNotification = createAsyncThunk(
  NotificationActionTypes.SEND_NOTIFICATION,
  async (newNotifiction: sentNotification, thunkAPI) => {
    try {
      const { user } = thunkAPI.getState() as RootState;

      const response = await axios.post(
        `${EndPoints.notifications}`,
        newNotifiction,
        {
          headers: { token: user.userData?.token! },
        }
      );

      if (response.data.status !== "Success") {
        throw new Error("can't send notification");
      }
    } catch (err) {
      throw err;
    }
  }
);
