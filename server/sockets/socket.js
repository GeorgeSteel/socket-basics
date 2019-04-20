const { io } = require('../server');

io.on('connection', client => {
    console.log('User connected');
    
    client.on('disconnect', () => console.log('User disconnected'));
    
    client.on('sendMsg', (msg, callback) => {
        console.log(msg);
        // callback();
        client.broadcast.emit('sendMsg', msg);
    });    
    client.emit('sendMsg', {
        user: 'Admin',
        msg: 'Admin is here'
    });
});
