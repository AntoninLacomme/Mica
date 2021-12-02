
class IOEmmeteurCommunication {

    constructor (server) {
        this.server = server;
    }

    emit (client, ecouteur, data) {
        client.socket.emit (ecouteur, data)
    }

    emitAll (clients, ecouteur, data) {
        clients.forEach ((client) => {
            this.emit (client, ecouteur, data);
        });
    }
    
}

module.exports = IOEmmeteurCommunication;