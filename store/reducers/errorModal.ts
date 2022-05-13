import { createReducer } from "@reduxjs/toolkit";
import {
  ErrorModalActionTypes,
  hideModal,
  ShowModal,
} from "../actions/errorModal";

export interface ErrorModalAction {
  data?: string;
  type: ErrorModalActionTypes;
}

const initialState = {
  content: "",
  isVisible: false,
};

const errorModalReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(ShowModal, (state, action) => {
      return {
        content: action.payload,
        isVisible: true,
      };
    })
    .addCase(hideModal, (state) => {
      return {
        ...state,
        isVisible: false,
      };
    });
});

export default errorModalReducer;
