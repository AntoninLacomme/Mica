class IOClient {

    constructor (socket) {
        this.socket = socket;
        this.socket.id = this.generateId ();
    }

    getSocket () {
        return this.socket;
    }

    getIdSocket () {
        return this.socket.id;
    }
    
    generateId () {
        return Date.now().toString(16) + "-" + Math.floor(Math.random() * Math.floor(Math.random() * Date.now())).toString(16);
    }
}

module.exports = IOClient;