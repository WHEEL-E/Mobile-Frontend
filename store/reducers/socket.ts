import { createReducer } from "@reduxjs/toolkit";
import { SocketActionTypes } from "../../utilities/types/socketTypes";
import { initSocket } from "../actions/socket";

export interface ErrorModalAction {
  data?: string;
  type: SocketActionTypes;
}

const initialState = {
  socket: {},
};

const SocketReducer = createReducer(initialState, (builder) => {
  builder.addCase(initSocket.fulfilled, (state, action) => {
    return {
      ...state,
      socket: action.payload,
    };
  });
});

export default SocketReducer;
