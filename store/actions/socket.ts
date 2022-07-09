import { SocketActionTypes } from "../../utilities/types/socketTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { io, Socket } from "socket.io-client";
import { ShowModal, isLoading, notLoading } from "./dataStatus";

export const initSocket = createAsyncThunk(
  SocketActionTypes.INIT_SOCKET,
  async (undefined, thunkAPI) => {
    try {
      thunkAPI.dispatch(isLoading());

      const socketEndpoint = "http://raspberrypi.local:3000";

      const socket: Socket = io(socketEndpoint, {
        transports: ["websocket"],
      });

      thunkAPI.dispatch(notLoading());
      return socket;
    } catch (err) {
      thunkAPI.dispatch(ShowModal("errorModal.socketconnection"));
      throw err;
    }
  }
);
