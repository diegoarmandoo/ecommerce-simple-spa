import { isAuthenticated } from "./authentication.js";
import { View } from "./view.js";

//Classe responsável pelo roteamento - simulação da navegabilidade
class Router {
	
    /////////////
    //Atributos//
    /////////////

    _routes;

    //////////////
    //Construtor//
    //////////////

    constructor(routes) {
        this._routes = routes;
    }

    ///////////
    //Metodos//
    ///////////

    navigateTo(path) {
        //Recupera a View da Configuração de Rotas
        let view = this._routes[path];

        //Verifica se é um logout 
        if (path === "/logout"){
            localStorage.removeItem('usuarioLogado');
            localStorage.removeItem('JWTToken');
            const eventLogout = new Event('eventLogout', { bubbles: true, cancelable: false });
            window.dispatchEvent(eventLogout);
        }

        //Verifica seExiste Implementação da View
        if (!(view instanceof View)){
            history.replaceState("", "", "/not-found");
            this.navigateTo("/not-found");
            return;
        }

        //Se a View Existir Verifica Autenticação
        if (view._safe && !isAuthenticated()){
            history.replaceState("", "", "/login");
            this.navigateTo("/login");
            return;
        }

        //Inicializa a View
        view.init();
    }

}

export { Router }