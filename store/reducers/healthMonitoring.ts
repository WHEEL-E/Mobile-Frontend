import { createReducer } from "@reduxjs/toolkit";
import { Socket } from "socket.io-client";
import { startConnection } from "../actions/healthMonitoring";

const initialState: { socket: Socket | undefined } = {
  socket: undefined,
};

const healthMonitoring = createReducer(initialState, (builder) => {
  builder.addCase(startConnection.fulfilled, (state, action) => {
    return {
      ...state,
      socket: action.payload,
    };
  });
});

export default healthMonitoring;
