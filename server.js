const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});


io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("text message", (msg) => {
    io.emit("text message", msg);
    console.log(`message: ${msg}`);
  });
});

server.listen("8080", () => {
  console.log("connected on 8080");
});
