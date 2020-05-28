import { LightningElement } from 'lwc';

export default class ParentCmp extends LightningElement {

    handleChildMethod(event){
        this.template.querySelector('c-child-cmp').handleParenttoChild(event.target.value);
    }
}