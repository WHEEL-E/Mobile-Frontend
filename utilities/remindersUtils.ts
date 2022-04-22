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
