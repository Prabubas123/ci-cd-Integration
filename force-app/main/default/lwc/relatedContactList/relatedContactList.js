import { LightningElement, track, api } from 'lwc';

import getRelatedContactList from '@salesforce/apex/ContactController.getRelatedContactList';

const COLUMNS=[
                {label: "Name", fieldName:'Name'},
                {label: "Phone", fieldName:'Phone', type:'Phone'},
                {label: "Email", fieldName:'Email', type:'email'},
              ];

export default class RelatedContactList extends LightningElement {
    @api recordId;
    @track columns = COLUMNS;
    @track isError = false;
    @track errorMessage;
    @track data;

    connectedCallback(){
        this.loadRelatedContacts();
    }

    loadRelatedContacts(){
        console.log('Record id--------'+this.recordId);
        getRelatedContactList( {accId : this.recordId})
        .then(results=>{
            this.data = results;
            this.isError = false;
            console.log('data---'+this.data)
        })
        .catch(error=>{
                this.isError = true;
                this.errorMessage = error.body.message;

        });
    }
}