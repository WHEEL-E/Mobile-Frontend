import { createAction } from "@reduxjs/toolkit";
import { ErrorModalActionTypes } from "../../utilities/types/errorModalTypes";

export const ShowModal = createAction<string>(ErrorModalActionTypes.SHOW_MODAL);
export const hideModal = createAction(ErrorModalActionTypes.HIDE_MODAL);
