import colors from "../constants/colors";

export enum NotificationType {
  CONNECTIONS = "CONNECTIONS",
  APP_NEWS = "APP_NEWS",
  NEW_REMINDER = "NEW_REMINDER",
  PATIENT_UPDATES = "PATIENT_UPDATES",
  EMERGENCY_CALL = "EMERGENCY_CALL",
}

export const NotificationColors = new Map<NotificationType, string>([
  [NotificationType.CONNECTIONS, colors.darkBlue],
  [NotificationType.APP_NEWS, colors.lightPurple],
  [NotificationType.NEW_REMINDER, colors.darkBlue],
  [NotificationType.PATIENT_UPDATES, colors.darkBlue],
  [NotificationType.EMERGENCY_CALL, colors.darkPink],
]);

export interface NotificationData {
  _id: string;
  user_id: number;
  title: string;
  description: string;
  isRead: boolean;
  type: NotificationType;
  created_at: string;
  updated_at: string;
}

export interface NotificationCardProps {
  notificationData: NotificationData;
}

export enum NotificationActionTypes {
  GET_ALL = "GET_ALL",
  REMOVE_NOTIFICATION = "REMOVE_NOTIFICATION",
}
