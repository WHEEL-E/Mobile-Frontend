import { createReducer } from "@reduxjs/toolkit";
import {
  hideModal,
  ShowModal,
  isLoading,
  notLoading,
} from "../actions/dataStatus";

const initialState = {
  content: "",
  isVisible: false,
  isLoading: false,
};

const dataStatusReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(ShowModal, (state, action) => {
      return {
        isLoading: false,
        content: action.payload,
        isVisible: true,
      };
    })
    .addCase(hideModal, (state) => {
      return {
        ...state,
        isVisible: false,
      };
    })
    .addCase(isLoading, (state) => {
      return {
        ...state,
        isLoading: true,
      };
    })
    .addCase(notLoading, (state) => {
      return {
        ...state,
        isLoading: false,
      };
    });
});

export default dataStatusReducer;
