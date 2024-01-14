import { View } from "../../js/view.js";

class LoginView extends View {

    //////////////
    //Construtor//
    //////////////

    constructor(contentView, templatePath = '/views/autenticacao/login.html') {
        super(contentView, templatePath);
    }

    ///////////////////////
    //Metodos Assincronos//
    ///////////////////////
    
    async manipularLoginForm(event) {
        event.preventDefault();
        const loginForm = new FormData(event.target);
        const inputUsuario = loginForm.get('usuario');
        const inputSenha = loginForm.get('senha');

        const response = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: inputUsuario,
                password: inputSenha
                // expiresInMins: 60, // optional
            })
        });
        
        if (response.status === 200) {
            const data = await response.json();
            localStorage.setItem('usuarioLogado', JSON.stringify(data));
            localStorage.setItem('JWTToken', JSON.stringify(data.token));
    
            const eventLogin = new Event('eventLogin', { bubbles: true, cancelable: false });
            window.dispatchEvent(eventLogin);
        }
    }

    async init() {
        await this.show();
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', this.manipularLoginForm);
        }
    }

}

export { LoginView }