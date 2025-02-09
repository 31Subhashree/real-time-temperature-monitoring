import { io } from "socket.io-client";

const SOCKET_URL = "ws://localhost:5001";

const socket = io(SOCKET_URL, {
  transports: ["websocket"],
  reconnection: true,
});

export default socket;
