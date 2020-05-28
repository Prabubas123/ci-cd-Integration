import { LightningElement } from 'lwc';

export default class ChildComponentJavascript extends LightningElement {

    handleParent(event){
        const name= event.target.value;
        const selectedValue = new CustomEvent('mycustommethod',{detail:name,bubbles:true});
        this.dispatchEvent(selectedValue);
    }
}