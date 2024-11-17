const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = 3000;

// Serve static files from public directory
app.use(express.static('public'));

// Main route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Handle WebSocket connections
io.on('connection', (socket) => {
    console.log('A user connected');
    
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

// Start server
http.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}); 