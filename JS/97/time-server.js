const net = require('net');
const strftime = require('strftime');

const server = net.createServer(function (socket) {
    socket.end((strftime('%F %R', new Date())) + '\n');
})
server.listen(process.argv[2])