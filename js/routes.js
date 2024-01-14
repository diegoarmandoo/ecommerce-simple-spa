import { HomeView } from "../views/home/home.js";
import { ContatoView } from "../views/contato/contato.js";
import { SobreView } from "../views/sobre/sobre.js";
import { NotFoundView } from "../views/not-found/not-found.js";

//Recupera o elemento HTML que vai armazenar os templates das views
const containerView = document.getElementById('content-view');

//Instancia as Views
const homeView = new HomeView(containerView);
const contatoView = new ContatoView(containerView);
const sobreView =  new SobreView(containerView);
const notFoundView = new NotFoundView(containerView);

//Define um objeto para relacionar as rotas (URL) as views
const routes = {
    '/': homeView,
    '/home': homeView,
    '/contato': contatoView,
    '/sobre': sobreView,
    '/not-found': notFoundView,
};

export { routes }