import { LightningElement,track } from 'lwc';

export default class ParentComponentJavascript extends LightningElement {
    @track msg;

    constructor(){
        super();
        this.template.addEventListener('mycustomemethod',this.handleChildMethod.bind(this));
    }

    handleChildMethod(event){
        const valueDisplay = event.detail;
        this.msg = valueDisplay;
    }

}