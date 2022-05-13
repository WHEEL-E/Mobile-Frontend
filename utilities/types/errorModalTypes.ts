export enum ErrorModalActionTypes {
  SHOW_MODAL = "SHOW_MODAL",
  HIDE_MODAL = "HIDE_MODAL",
}

export interface ErrorModalAction {
  data?: string;
  type: ErrorModalActionTypes;
}

export interface ErrorModalState {
  content: string;
  isVisible: boolean;
}
