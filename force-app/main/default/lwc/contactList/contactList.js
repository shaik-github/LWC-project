import { LightningElement, wire } from 'lwc';
import { reduceErrors } from 'c/ldsUtils';
import EMAIL from '@salesforce/schema/Contact.Email';
import LAST_NAME from '@salesforce/schema/Contact.LastName';
import FIRST_NAME from '@salesforce/schema/Contact.FirstName';
import getContacts_method from '@salesforce/apex/ContactController.getContacts';

const COLUMNS = [
    { label: 'Email', fieldName: EMAIL.fieldApiName, type: 'email' },
    { label: 'Last Name', fieldName: LAST_NAME.fieldApiName, type: 'text' },
    { label: 'First Name', fieldName: FIRST_NAME.fieldApiName, type: 'text' }
];
export default class ContactList extends LightningElement {
    columns = COLUMNS;
    @wire(getContacts_method) contactList;

    get errors() {
        return (this.contactList.error) ?
            reduceErrors(this.contactList.error) : [];
    }
}