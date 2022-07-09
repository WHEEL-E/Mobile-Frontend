import { createAction } from "@reduxjs/toolkit";
import { DataStatusActionTypes } from "../../utilities/types/errorModalTypes";

export const ShowModal = createAction<string>(DataStatusActionTypes.SHOW_MODAL);
export const hideModal = createAction(DataStatusActionTypes.HIDE_MODAL);
export const isLoading = createAction(DataStatusActionTypes.IS_LOADING);
export const notLoading = createAction(DataStatusActionTypes.NOT_LOADING);
