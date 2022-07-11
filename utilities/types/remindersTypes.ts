export interface ReminderModalProps {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
  identifier?: string;
  reminderData: { title: string; description: string; due_date: Date };
  patientId?: string;
}

export interface ReminderCardProps {
  identifier: string;
  sender?: string;
  receiver?: string;
  title: string;
  description: string;
  due_date: Date;
  backgroundColor: string;
  enableEdit?: boolean;
}

export interface RemindersListProps {
  enableEdit: boolean;
  receiver?: string;
}

export type Reminder = {
  _id: string;
  supervisor_id: string;
  supervisorName: string;
  patient_id: string;
  title: string;
  due_date: Date;
  description: string;
};

export interface RemindersState {
  allReminders: Reminder[];
}

export enum RemindersActionTypes {
  GET_ALL = "GET_ALL",
  REMOVE_REMINDER = "REMOVE_REMINDER",
  ADD_REMINDER = "ADD_REMINDER",
  UPDATE_REMINDER = "UPDATE_REMINDER",
}

export interface RemindersActionData {
  addedReminder?: Reminder;
  allReminders?: Reminder[];
  removedId?: string;
  updatedReminder?: Partial<Reminder>;
}

export interface RemindersAction {
  type: RemindersActionTypes;
  data: RemindersActionData;
}
