export default class MicaClientIO {

    constructor () {
        this.socket = io.connect ();
    }

    addEcouteurSocket (ecouteur, fx) {
        this.socket.on (ecouteur, (data) => {
            console.log("PING RECU SUR L'ECOUTEUR <" + ecouteur + ">");
            fx (data);
        });
    }
}
