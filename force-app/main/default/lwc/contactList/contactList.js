import { LightningElement, wire } from "lwc";
import getContacts from "@salesforce/apex/ContactListController.getContacts";
export default class ContactList extends LightningElement {
  @wire(getContacts)
  contacts;
}
