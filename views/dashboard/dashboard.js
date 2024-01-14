import { View } from "../../js/view.js";

class DashboardView extends View  {

    //////////////
    //Construtor//
    //////////////

    constructor(contentView, templatePath = '/views/dashboard/dashboard.html') {
        super(contentView, templatePath);
        this._safe = true;
    }

    /////////////////////
    //Metodo Assincrono//
    ////////////////////

    async init() {
        await this.show();
    }
}

export { DashboardView }