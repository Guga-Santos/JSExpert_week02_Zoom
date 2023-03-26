const server = require('http').createServer((req, res) => {
  res.writeHead(204, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, PORT, GET',
  })
  res.end('Hey There!')
})

const socketIo = require('socket.io');
const io = socketIo(server, {
  cors: {
    origin: '*',
    credentials: false
  }
})

io.on('connection', socket => {
  console.log('connection', socket.id);
  socket.on('join-room', (roomId, userId) => {
    // Adiciona os usuários na mesma sala
    socket.join(roomId);
    // Emite uma mensagem para todos na sala quando um usuário se conectar
    socket.to(roomId).broadcast.emit('user-connected', userId);
    socket.on('disconnected!', () => {
      console.log('disconnected!', roomId, userId)
      // Emite uma mensagem para todos na sala quando um usuário se desconectar
      socket.to(roomId).broadcast.emit('user-disconnected', userId);
    });
  })
})