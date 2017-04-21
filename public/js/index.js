var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');

    socket.emit('createMessage', {
        from: 'Petri',
        text: 'Jep jep'
    });
    
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

// new message from server
socket.on('newMessage', function (message) {
    console.log('New message', message);
})

