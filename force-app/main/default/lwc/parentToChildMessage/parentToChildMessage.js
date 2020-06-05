import { LightningElement } from 'lwc';

export default class ParentToChildMessage extends LightningElement {

    sendToChild(event){
        const btnClick = event.target.value;
        console.log(btnClick);
    }
}