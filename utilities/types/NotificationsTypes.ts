import colors from "../constants/colors";

export enum NotificationType {
  CONNECTIONS = "CONNECTIONS",
  APP_NEWS = "APP_NEWS",
  NEW_REMINDER = "NEW_REMINDER",
  PATIENT_UPDATES = "PATIENT_UPDATES",
  EMERGENCY_CALL = "EMERGENCY_CALL",
}

export interface sentNotification {
  user_id: string;
  title: string;
  description: string;
  type: NotificationType;
  from_name: string;
}

export enum NotificationDescriptions {
  RECEIVED_CONNECTION = "RECEIVED_CONNECTION",
  REJECTED_CONNECTION = "REJECTED_CONNECTION",
  ACCEPTED_CONNECTION = "ACCEPTED_CONNECTION",
  NEW_UPDATE = "NEW_UPDATE",
  RECEIVED_NEW_REMINDER = "RECEIVED_NEW_REMINDER",
  NEW_RECORD = "NEW_RECORD",
  UNHEALTHY_PATIENT = "UNHEALTHY_PATIENT",
  RECEIVED_EMERGENCY_CALL = "RECEIVED_EMERGENCY_CALL",
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
  user_id: string;
  title: string;
  description: string;
  isRead: boolean;
  type: NotificationType;
  created_at: string;
  updated_at: string;
  from_name: string;
}

export interface NotificationCardProps {
  notificationData: NotificationData;
}

export enum NotificationActionTypes {
  GET_ALL = "GET_ALL",
  REMOVE_NOTIFICATION = "REMOVE_NOTIFICATION",
}
