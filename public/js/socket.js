let socket = io();

        socket.on('connect', () => {
            console.log('Server connected');
        });
        socket.on('disconnect', () => {
            console.log('Server disconnected');
        });

        socket.emit('sendMsg', {
            user: 'Jorge',
            msg: 'Hola'
        }, () => console.log('IT WORKED!'));

        socket.on('sendMsg', (msg) => {
            console.log(msg);
        });