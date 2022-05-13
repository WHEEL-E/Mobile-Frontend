export interface HealthRecordProps {
  id: string;
  title: string;
  fileUri: string;
  date: Date;
  backgroundColor: string;
}

export interface HealthRecordModalProps {
  modalVisible: boolean;
  setModalVisible: (state: boolean) => void;
}
