import { View } from "../../js/view.js";

class SobreView extends View {

    //////////////
    //Construtor//
    //////////////

    constructor(contentView,templatePath = '/views/sobre/sobre.html') {
        super(contentView,templatePath);
    }

    ///////////////////////
    //Metodos Assincronos//
    ///////////////////////

    async init() {
        await this.show();
    }

}

export { SobreView }