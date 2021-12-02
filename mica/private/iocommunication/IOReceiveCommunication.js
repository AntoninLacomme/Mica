class IOReceiveCommunication {
    constructor (server) {
        this.server = server;
        // this.setDefaultSocketConnection ();
    }

    getClientBySocket (socket) {
        for (let i=0; i<listClients.length; i++) {
            if (listClients[i].getIdSocket () == socket.id) {
                return listClients[i];
            }
        }
        return null;
    }

    addEcouteurSocket (socket, ecouteur, fx) {
        socket.on (ecouteur, (data) => {
            console.log("PING RECU SUR L'ECOUTEUR <" + ecouteur + ">" + " PAR " + socket.id);
            fx (data);
        });
    }

    setDefaultSocketConnection () {
        this.setSocketConnection ((socket) => {
            let c = this.generateNewClient (socket);
            this.server.listClients.push (c);
            console.log("EVENT DEFAULT_CONNECTION, ID >>> " + c.getIdSocket ());
        });
    }

    setSocketConnection (fx) {
        this.server.io.on ("connection", fx);
    }
}


module.exports = IOReceiveCommunication;