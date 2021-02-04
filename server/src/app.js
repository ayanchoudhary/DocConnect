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

const STATIC_CHANNELS = ['global_notifications', 'global_chat']

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})

io.on('connection', (socket) => {
    console.log('new client')
    socket.emit('connection', null)
})
module.exports = app;
