const socketio = require('socket.io');
const express = require('express');
const app = express();
const http = require('http');

const server = http.createServer(app);

const io = socketio(server, {
    cors: {
        origin: '*',
        methods: ["GET", "POST", "OPTIONS"]
    },
});

server.listen(3001, () => {
    console.log('Chat Server listening on 3001...');
    io.on('connection', socket => {
        console.log(`User connected: ${socket.id}`);

        socket.on('WMSG', (data) => {
            console.log(data);
        });

        socket.on('disconnect', () => {
            console.log(`User disconnected: ${socket.id}`);
            io.emit('ALL', `User disconnected: ${socket.id}`);
        });
    });
});