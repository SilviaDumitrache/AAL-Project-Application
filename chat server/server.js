let app = require('express')();
let server = require('http').createServer(app);
let io = require('socket.io')(server);

//dupa ce clientul se conecteaza la server
io.on('connect', (socket) => {
    console.log(socket);
    socket.on('disconnect', function() =>{
        io.emit('users-change', {user: socket.username, event: 'left'});
    });

    socket.on('set-name', (name) => {
        socket.username = name;
        io.emit('users-changed', {user:name, event:'joined'});
    });

    socket.on('send-message', (message) => {
        io.emit('message', {msg: message.text, user: socket.username, createdAt:new Date() });
    });

});

var port = process.env.PORT || 3000;

server.listen(port, function() {
    console.log('Aplicatia a pornit la adresa http://localhost:' + port);
});

