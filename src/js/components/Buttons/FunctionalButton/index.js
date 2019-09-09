import PrettyButton from '../PrettyButton';

export default class FunctionslButton extends PrettyButton{
    constructor(containerid, value, className, handlerClick){
        super(containerid, value, className);
        this.handlerClick = handlerClick;
    }


    render(){
        const btn = document.createElement('button');
        btn.innerText = this.value ? this.value : "";
        btn.classList.add(this.className);
        btn.addEventListener('click', this.handlerClick);

        this.container.appendChild(btn);
    }
}
