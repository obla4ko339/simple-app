import BaseButton from '../BaseButton'

export default class ButtonExp extends BaseButton{
    constructor(containerid, value,eventBtn, handlerEvent, param="5"){
        super(containerid,value);
        this.handlerEvent = handlerEvent;
        this.param = param;
        this.eventBtn = eventBtn;
    }

    render(){
        const btn = document.createElement("button");
        btn.addEventListener(this.eventBtn, this.handlerEvent);
        btn.style.fontSize = this.param;
        this.param = "BUTTTTON";
        btn.innerText = this.param;
        this.container.appendChild(btn);

    }
}