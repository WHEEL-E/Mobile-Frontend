export interface ReminderModalProps {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
  identifier?: string;
  reminderData: { reminderTitle: string; reminderBody: string };
  patientId?: string;
}

export interface ReminderCardProps {
  identifier: string;
  sender?: string;
  receiver?: string;
  reminderTitle: string;
  reminderBody: string;
  backgroundColor: string;
  enableEdit?: boolean;
}

export interface RemindersListProps {
  enableEdit: boolean;
  receiver?: string;
}

export type Reminder = {
  id: string;
  supervisorId: string;
  supervisorName: string;
  patientId: string;
  reminderTitle: string;
  reminderBody: string;
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
