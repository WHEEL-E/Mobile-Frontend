import { createAction } from "@reduxjs/toolkit";

export enum ErrorModalActionTypes {
  SHOW_MODAL = "SHOW_MODAL",
  HIDE_MODAL = "HIDE_MODAL",
}

export const ShowModal = createAction<string>(ErrorModalActionTypes.SHOW_MODAL);
export const hideModal = createAction(ErrorModalActionTypes.HIDE_MODAL);
