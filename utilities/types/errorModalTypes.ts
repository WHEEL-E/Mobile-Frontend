export enum DataStatusActionTypes {
  SHOW_MODAL = "SHOW_MODAL",
  HIDE_MODAL = "HIDE_MODAL",
  IS_LOADING = "IS_LOADING",
  NOT_LOADING = "NOT_LOADING",
}

export interface ErrorModalAction {
  data?: string;
  type: DataStatusActionTypes;
}

export interface ErrorModalState {
  content: string;
  isVisible: boolean;
}
