import BaseComponent from "../BaseComponent";

export default class BtnComponent extends BaseComponent{

    constructor(){
        super();
        
    }

    createComponent(){
        const bn = document.createElement('button');
        bn.innerText = "Моя кнопка в ночь";
        this.component = bn;

    }


}