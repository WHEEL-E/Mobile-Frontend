import { Socket } from "socket.io-client";

export enum SocketActionTypes {
  INIT_SOCKET = "INIT_SOCKET",
}

export interface SocketAction {
  data?: Socket;
  type: SocketActionTypes;
}
