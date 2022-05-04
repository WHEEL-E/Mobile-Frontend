export interface addNewReminderModalProps {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
  identifier?: string;
}

export interface EditReminderModalProps {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
  identifier: string;
  reminderTitleEdit: string;
  editTitleHandler: (body: string) => void;
  reminderBodyEdit: string;
  editBodyHandler: (body: string) => void;
  onSave: (
    reminderId: string,
    newReminderTitle: string,
    newReminderBody: string
  ) => void;
}

export interface ReminderCardProps {
  identifier: string;
  sender: string;
  reminderTitle: string;
  reminderBody: string;
  backgroundColor: string;
  enableEdit?: boolean;
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

export interface RemindersData {
  addedReminder?: Reminder;
  allReminders?: Reminder[];
  removedId?: string;
  updatedReminder?: Partial<Reminder>;
}

export interface RemindersAction {
  type: RemindersActionTypes;
  data: RemindersData;
}
