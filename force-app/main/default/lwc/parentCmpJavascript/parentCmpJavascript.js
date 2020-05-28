import { LightningElement,track  } from 'lwc';

export default class ParentCmpJavascript extends LightningElement {
    @track msg;

    constructor(){
        super();
        this.template.addEventListener('mycustommethod',this.handleParent.bind(this));
    }
    handleParent(event){
        const displayValue = event.detail;
        this.msg = displayValue;
    }

}