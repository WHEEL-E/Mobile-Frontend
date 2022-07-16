import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { io, Socket } from "socket.io-client";
import { ShowModal, isLoading, notLoading } from "./dataStatus";

export const startConnection = createAsyncThunk(
  "INIT_SOCKET",
  async (undefined, thunkAPI) => {
    try {
      thunkAPI.dispatch(isLoading());
      const socketEndpoint = "http://192.168.1.115:5000";

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

export const storeData = createAction<any>("STORE_DATA");
