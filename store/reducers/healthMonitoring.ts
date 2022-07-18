import { createReducer } from "@reduxjs/toolkit";
import { Socket } from "socket.io-client";
import { startConnection, storeData } from "../actions/healthMonitoring";
// import dataStatusReducer from "./dataStatus";
import data from "../../data/healthMonitoringDummydata.json";

const initialState: { socket: Socket | undefined; data: any } = {
  socket: undefined,
  data: data.data,
};

const healthMonitoring = createReducer(initialState, (builder) => {
  builder
    .addCase(startConnection.fulfilled, (state, action) => {
      return {
        ...state,
        socket: action.payload,
      };
    })
    .addCase(storeData, (state, action) => {
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    });
});

export default healthMonitoring;
