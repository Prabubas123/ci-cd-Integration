import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {

    @track greetingValue = "Prabu";

    dynamicValueChange(event){
        this.greetingValue = event.target.value;

    }

}