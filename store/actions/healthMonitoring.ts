import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { io, Socket } from "socket.io-client";
import { RootState } from "../reducers/rootReducer";
import { ShowModal, isLoading, notLoading } from "./dataStatus";

export const startConnection = createAsyncThunk(
  "INIT_SOCKET",
  async (undefined, thunkAPI) => {
    try {
      thunkAPI.dispatch(isLoading());
      const { addressesReducer } = thunkAPI.getState() as RootState;
      const address = addressesReducer.ipAddress;
      const socketEndpoint = `http://${address}`;

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
