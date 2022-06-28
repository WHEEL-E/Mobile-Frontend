import { NotificationData } from "../../utilities/types/notificationsTypes";
import { createReducer } from "@reduxjs/toolkit";
import { removeNotification, getNotifications } from "../actions/notifications";

const initialState: { allNotifications: NotificationData[] } = {
  allNotifications: [],
};

const notificationReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getNotifications.fulfilled, (state, action) => {
      return {
        allNotifications: action.payload,
      };
    })
    .addCase(removeNotification.fulfilled, (state, action) => {
      const removedNotification = action.payload;
      const newNotifictions = [...state.allNotifications].filter(
        (notification) => notification._id !== removedNotification
      );
      return {
        allNotifications: newNotifictions,
      };
    });
});

export default notificationReducer;
