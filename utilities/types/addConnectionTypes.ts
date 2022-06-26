export enum AddConnectionActionTypes {
  GET_RESULTS_PATIENTS = "GET_RESULTS_PATIENTS",
  GET_RESULTS_SUPERVISORS = "GET_RESULTS_SUPERVISORS",
  SET_IS_LOADING = "SET_IS_LOADING",
  SET_NO_MATCHING = "SET_NO_MATCHING",
  EMPTY_LIST = "EMPTY_LIST",
}

export interface UserCardProps {
  name: string;
  imageUri: string;
  id: string;
}

export interface AddUserModalProps {
  name: string;
  imageUri: string;
  id: string;
  modalVisible: boolean;
  setModalVisible: (state: boolean) => void;
}

export interface searchUser {
  _id: string;
  name: string;
  profilePhoto: string;
}

export interface AddConnectionState {
  data: searchUser[];
  loading: boolean;
  noMatching: boolean;
}
