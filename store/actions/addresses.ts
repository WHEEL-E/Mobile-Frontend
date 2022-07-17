import { createAction } from "@reduxjs/toolkit";

export const ShowIpModal = createAction("SHOW_MODAL");
export const hideIpModal = createAction("HIDE_MODAL");
export const setIpData = createAction<string>("SET_DATA");
