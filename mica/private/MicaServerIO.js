const IOClient = require(__dirname + "\\iocommunication\\IOClient.js");
const IOEmmeteurCommunication = require(__dirname + '\\iocommunication\\IOEmmeteurCommunication');
const IOReceiveCommunication = require(__dirname + '\\iocommunication\\IOReceiveCommunication');
const MicaServer = require(__dirname + "\\MicaServer.js");

class MicaServerIO extends MicaServer {

    constructor (port = 8001) {
        super (port);

        this.io = require ('socket.io')(this.http);

        this.listClients = [];
        this.ecouteur = new IOReceiveCommunication (this);
        this.emmeteur = new IOEmmeteurCommunication (this);
    }

    generateNewClient (socket) {
        return new IOClient (socket);
    }

    getClientByIdSocket (idSocket) {
        for (let i=0; i<this.listClients.length; i++) {
            if (this.listClients[i].getIdSocket() == idSocket) {
                return this.listClients[i];
            }
        }
        return null;
    }
}


module.exports = MicaServerIO;