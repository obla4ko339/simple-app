import DomWorker from './DomWorker'

import TitleComponent from './components/TitleComponent';
import ListComponent from './components/ListComponent';
import CenterComponent from './components/CenterComponent'

const names = [
    'Harre', 'Rohn', 'Juny', 'Germiona'
];

DomWorker.mount(new TitleComponent('Pro'), document.getElementById('title'));

DomWorker.mount(new ListComponent(names), document.getElementById('list'));

DomWorker.mount(new CenterComponent(
    new ListComponent(names)
), document.getElementById('center'));

const button = document.createElement('button');
button.innerText = "click"

DomWorker.mount(new CenterComponent(button),
 document.getElementById('center_second'))


 const brush = {
    color:'',

    createComponent:()=>{console.log('I`am Programmer')},

     render: function(canvas){
        canvas.style.width = "250px",
        canvas.style.height = "250px",
        canvas.style.backgroundColor = this.color
     },
     setColor: function(color){
        this.color = color;
        return this;
     }
 }

 DomWorker.mount(brush.setColor('red'), document.getElementById('other'))