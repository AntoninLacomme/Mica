const MicaServerIO = require("./mica/private/MicaServerIO.js");

class ServeurTest extends MicaServerIO {
    constructor () {
        super ();
        // définition du path par défaut
        this.setDefaultPathServer (__dirname + "/public");

        this.createGetRountingPath ("/", "index.html",
            // les deux fonctions ne doivent pas nécessairement être déclarées
            (req, res, params) => {
                console.log("Called before Loading index.html");
                console.log(params);
            },
            (req, res, params) => {
                console.log("Called after Loading index.html");
            }
        );

        // this.ecouteur.setDefaultSocketConnection ();
        this.ecouteur.setSocketConnection ((socket) => {
            let c = this.generateNewClient (socket);
            this.listClients.push (c);
            console.log("EVENT DEFAULT_CONNECTION, ID >>> " + c.getIdSocket ());

            this.emmeteur.emit (c, "connection", {id: c.getIdSocket (), message: "Bienvenue"});
        });
    }
}

// création d'une instance du serveur
var serveur = new ServeurTest ();
// lancement du serveur
serveur.launchServer ();