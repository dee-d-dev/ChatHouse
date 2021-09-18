// const sendText = document.querySelector(".send-text");
// const joinRoom = document.querySelector(".join-room");
// const displayScreen = document.querySelector(".message-display");
// const message = document.getElementById("message");
// const room = document.getElementById("room");
// const form = document.querySelector(".form");
// const textSpace = document.querySelector(".text-space");

// const socket = io();

// const form = document.getElementById("form");
// const input = document.getElementById("input");

// form.addEventListener("onsubmit", (e) => {
//   e.preventDefault();
  
//   if (input.value) {
//     socket.emit("text message", input.value);
//     input.value = "";
//   }
// });

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let messageInput = message.value;
//   const roomInput = room.value;

//   if (message.value) {
//     socket.emit("chatMessage", messageInput);
//     message.value = " ";
//   }

//   socket.on("message", (msg) => {
//     // displayMessage(msg);
//     const div = document.createElement("div");
//     div.textContent = msg;
//     document.querySelector(".text-space").append(div);
//     console.log(msg);
//   });
// });

// joinRoom.addEventListener("click", () => {
//   const roomInput = room.value;
// });

// function displayMessage(message) {
//   const div = document.createElement("div");
//   div.textContent = message;
//   document.querySelector(".text-space").append(div);
// }
