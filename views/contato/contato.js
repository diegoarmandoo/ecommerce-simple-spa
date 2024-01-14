import { View } from "../../js/view.js";

class ContatoView extends View {

    //////////////
    //Construtor//
    //////////////

    constructor(contentView,templatePath = '/views/contato/contato.html') {
        super(contentView,templatePath);
    }

    ///////////////////////
    //Metodos Assincronos//
    ///////////////////////

    async init() {
        await this.show();
    }

}

export { ContatoView }