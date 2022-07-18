import { createReducer } from "@reduxjs/toolkit";
import { hideIpModal, ShowIpModal, setIpData } from "../actions/addresses";

const initialState = {
  ipAddress: "",
  isModalVisible: true,
};

const addressesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setIpData, (state, action) => {
      return { ...state, ipAddress: action.payload };
    })
    .addCase(hideIpModal, (state) => {
      return { ...state, isModalVisible: false };
    })
    .addCase(ShowIpModal, (state) => {
      return state;
    });
});

export default addressesReducer;
