const io = require('socket.io')(8900, {
    cors: {
        origin: "http://localhost:5173"
    },
})

let users = [];

const addUser = (userId, socketId) => {
    !users.some((user) => user.userId === userId) &&
        users.push({ userId, socketId });
}

const removeUser = (socketId) => {
    users = users.filter((user) => user.socketId !== socketId)
}

const getUser = (userId) => {
    return users.find((user) => user.userId === userId);
};

io.on('connection', (socket) => {
    
    //when ceonnect
    console.log("a user connected.");

    //take userId and socketId from user
    socket.on('addUser', (userId) => {
        addUser(userId, socket.Id)
        io.emit('getUsers', users)
    })

    //send and get message
    socket.on('sendMessage', ({ senderId, receiverId, content }) => {
        const user = getUser(receiverId);
        io.to(user.socketId).emit('getMessage', {
            senderId,
            content
        })
    })

    //When Disconnect
    socket.on('disconnected', () => {
        console.log("a user disconnected!");
        removeUser(socket.id);
        io.emit('getUsers', users)
    })
})


