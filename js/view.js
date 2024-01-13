//Classe abstrata que representa vizualizações de um SPA
class View {

    /////////////
    //Atributos//
    /////////////

    _container;

    _safe = false;

    _templatePath;

    //////////////
    //Construtor//
    //////////////

    constructor(container,templatePath) {
        if (this.constructor === View) {
          throw new Error('View é uma classe abstrata e não pode ser instanciada diretamente.');
        }
        this._setContentView(container);
        this._setTemplatePath(templatePath);
    }

    /////////////////////
    //Métodos Sincronos//
    /////////////////////

    isHTMLElement(obj) {
        return obj instanceof HTMLElement;
    }

    isValidPath(path) {
        const pathRegex = /^(\/([a-zA-Z0-9-_]+)*)*(\.html)?$/; // Change this regex based on your path requirements
        return pathRegex.test(path);
    }

    _setContentView(container){
        if (!this.isHTMLElement(container)){
          throw new Error('O container da view não é um elemento HTML válido.');
        }
        this._container = container;
    }

    _setTemplatePath(templatePath){
        if (!this.isValidPath(templatePath)){
          throw new Error('O caminho do template da view não é valido.');
        }
        this._templatePath = templatePath;
    }

    ///////////////////////
    //Métodos Assincronos//
    ///////////////////////

    async _getTemplate() {
        try {
          const response = await fetch(this._templatePath);
          const html = await response.text();
          return html;
        } catch (error) {
          console.error('Error fetching content:', error);
          return '';
        }
    }

    async show(){
        this._container.innerHTML = await this._getTemplate();
    }

}

export { View }