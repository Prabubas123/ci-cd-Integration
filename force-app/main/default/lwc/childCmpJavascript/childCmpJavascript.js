import { LightningElement } from 'lwc';

export default class ChildCmpJavascript extends LightningElement {
    handleChild(event){
        const name= event.target.value;
        const selectValue =  new CustomEvent('mycustommethod',{detail:name,bubbles: true});
        this.dispatchEvent(selectValue);
    }
}