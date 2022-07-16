import { createReducer } from "@reduxjs/toolkit";
import { Socket } from "socket.io-client";
import { startConnection, storeData } from "../actions/healthMonitoring";

const initialState: { socket: Socket | undefined; data: any } = {
  socket: undefined,
  data: [
    {
      SPO2: 400,
      user_id: 1,
      Pulse: 400,
      temprature: 37,
      time: "19:33:14",
    },
    {
      SPO2: 500,
      user_id: 1,
      Pulse: 500,
      temprature: 37,
      time: "19:33:15",
    },
    {
      SPO2: 400,
      user_id: 1,
      Pulse: 600,
      temprature: 37,
      time: "19:33:16",
    },
    {
      SPO2: 650,
      user_id: 1,
      Pulse: 650,
      temprature: 37,
      time: "19:33:17",
    },
  ],
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
