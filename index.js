import { Router } from "./js/router.js";
import { routes } from "./js/routes.js";

function initListenerClickDataLink(router) {
    //Configurando a função ouvinte de evento Click em links de dados - Para manipular a navegação no SPA
    window.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            history.pushState("", "", e.target.pathname);
            router.navigateTo(e.target.pathname);
        }
    });
}

function initListenerPopState(router) {
    //Configurando a função ouvinte de evento PopState para atualizar roteador
    window.addEventListener("popstate", e => {
        router.navigateTo(e.target.location.pathname);
    });
}

function initListenerDOMContentLoaded(router) {
    //Configurando a função ouvinte de evento DOMContentLoaded para manipular navegação após conteúdo DOM for carregado
    window.addEventListener("DOMContentLoaded", e => {
        router.navigateTo(e.target.location.pathname);
    });
}

function bootstrap() {

    console.log('Inicializando a Front End (SPA)');

    const router = new Router(routes);

    initListenerClickDataLink(router);

    initListenerPopState(router);

    initListenerDOMContentLoaded(router);

}

bootstrap();