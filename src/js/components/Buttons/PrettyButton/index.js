import BaseButtons from '../BaseButton';

export default class PrettyButton extends BaseButtons{
    constructor(containerid, value, className){
        super(containerid, value);
        this.className = className;
    }

    render(){
        const btn = document.createElement('button');
        btn.innerText = this.value ? this.value : "";
        btn.classList.add(this.className)
        this.container.appendChild(btn);
    }
}