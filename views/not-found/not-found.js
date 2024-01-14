import { View } from "../../js/view.js";

class NotFoundView extends View {

    //////////////
    //Construtor//
    //////////////

    constructor(contentView,templatePath = '/views/not-found/not-found.html') {
        super(contentView,templatePath);
    }

    ///////////////////////
    //Metodos Assincronos//
    ///////////////////////

    async init() {
        await this.show();
    }

}

export { NotFoundView }