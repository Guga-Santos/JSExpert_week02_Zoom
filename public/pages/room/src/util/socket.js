class SocketBuilder {
  constructor({ socketUrl }) {
    this.socketUrl = socketUrl;
  }

  build() {
    const socket = io.connect(this.socketUrl, {
      withCredentials: false
    })

    socket.on('user-connected');
    socket.on('user-disconnected');
  }
}