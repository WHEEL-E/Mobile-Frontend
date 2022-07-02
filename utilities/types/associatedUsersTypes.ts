import { User } from "@sentry/react-native";

export interface RemoveUserModalProps {
  modalVisible: boolean;
  setModalVisible: (state: boolean) => void;
  name: string;
  id: string;
}

export enum AssociatedUsersActionTypes {
  GET_ALL = "GET_ALL",
  REMOVE_User = "REMOVE_User",
}

export interface AssociatedUserData {
  userId: string;
  userName: string;
  address: string;
  profilePhoto: string;
}

export interface AssocitedUsersState {
  associatedUsers: AssociatedUserData[];
  associatedUser?: User;
}
