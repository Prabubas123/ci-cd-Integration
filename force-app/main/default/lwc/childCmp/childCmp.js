import { LightningElement, api, track } from 'lwc';

export default class ChildCmp extends LightningElement {
    @track messageFromParent;
    @api
    handleParenttoChild(str){
        this.messageFromParent = str.toUpperCase();
    }
}