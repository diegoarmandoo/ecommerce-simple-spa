import { HomeView } from "../views/home/home.js";
import { ContatoView } from "../views/contato/contato.js";
import { SobreView } from "../views/sobre/sobre.js";
import { NotFoundView } from "../views/not-found/not-found.js";
import { LoginView } from "../views/autenticacao/login.js";
import { DashboardView } from "../views/dashboard/dashboard.js";

//Recupera o elemento HTML que vai armazenar os templates das views
const containerView = document.getElementById('content-view');

//Instancia as Views
const homeView = new HomeView(containerView);
const contatoView = new ContatoView(containerView);
const sobreView =  new SobreView(containerView);
const notFoundView = new NotFoundView(containerView);
const loginView = new LoginView(containerView);

//Instancia as Views Seguras
const dashboardView = new DashboardView(containerView);

//Define um objeto para relacionar as rotas (URL) as views
const routes = {
    '/': homeView,
    '/home': homeView,
    '/contato': contatoView,
    '/sobre': sobreView,
    '/not-found': notFoundView,
    '/login': loginView,
	'/logout': loginView,
    '/dashboard': dashboardView,
};

export { routes }