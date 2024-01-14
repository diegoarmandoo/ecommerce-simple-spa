import { View } from "../../js/view.js";

class HomeView extends View {

    //////////////
    //Construtor//
    //////////////

    constructor(contentView,templatePath = '/views/home/home.html') {
        super(contentView,templatePath);
    }

    ///////////////////////
    //Metodos Assincronos//
    ///////////////////////
    
    async init() {
        await this.show();
    }

}

export { HomeView }