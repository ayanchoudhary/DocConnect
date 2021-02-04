const express = require('express');
const http = require('http');
const socketio = require('socket.io')

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
    cors: {
        origin: "*",
    }
});

const PORT = process.env.PORT || 4000;

const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";

io.on('connection', (socket) => {
    console.log('new client')

    const { roomId } = socket.handshake.query;
    socket.join(roomId);
    socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
        console.log("message incoming")
        io.in(roomId).emit(NEW_CHAT_MESSAGE_EVENT, data);
    });

    socket.on("disconnect", () => {
        socket.leave(roomId);
    })
})

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})

module.exports = app;
