import { SocketActionTypes } from "../../utilities/types/socketTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { io, Socket } from "socket.io-client";
import { ShowModal } from "./errorModal";

export const initSocket = createAsyncThunk(
  SocketActionTypes.INIT_SOCKET,
  async (undefined, thunkAPI) => {
    try {
      const socketEndpoint = "http://192.168.1.17:3000";

      const socket: Socket = io(socketEndpoint, {
        transports: ["websocket"],
      });
      return socket;
    } catch (err) {
      thunkAPI.dispatch(ShowModal("errorModal.socketconnection"));
      throw err;
    }
  }
);
