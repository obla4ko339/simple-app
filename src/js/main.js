import {BaseButtons,PrettyButton, FunctionalButton, ButtonExp} from './components/Buttons'


const baseBtn = new BaseButtons("footer", "base");
baseBtn.render();

const prettyBtn = new PrettyButton("footer", "Pretty", "pretty-btn");
prettyBtn.render();

const FunctionalBtn = new FunctionalButton("footer","functional","Pretty", ()=>{
    alert();
});
FunctionalBtn.render();

const buttonExp = new ButtonExp("footer", "Кнопачуля", "click", ()=>{alert()});
buttonExp.render();



