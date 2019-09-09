export default class BaseButtons{

    constructor(containerid, value){
        this.container = document.getElementById(containerid);
        console.log(this.container);
        this.value = value;
    }

    render(){
        const btn = document.createElement('button');
        btn.innerText = this.value ? this.value : '';
        
        this.container.appendChild(btn);
    }

}
