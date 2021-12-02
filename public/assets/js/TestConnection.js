import MicaClientIO from "./MicaClientIO.js";

class TestConnection extends MicaClientIO {

    constructor () {
        super ();

        this.addEcouteurSocket ("connection", (data) => {
            console.log(data);
        });
    }
}

window.onload = () => {
    let conn = new TestConnection ();
}