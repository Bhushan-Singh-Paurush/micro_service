import { Server } from "socket.io";

let io;

const initSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: "*",
    },
  });

  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);


  socket.on("join", (userId) => {
    console.log(`Socket ${socket.id} joined room ${userId}`);
    socket.join(userId);
  });
  

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });

    socket.on("error", (err) => {
      console.log("Socket error:", err.message);
    });
  });

  return io;
};

const getIO = () => {
  if (!io) {
    throw new Error("Socket.IO is not initialized");
  }

  return io;
};

export { initSocket, getIO };
