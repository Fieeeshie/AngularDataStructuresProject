import { Component } from '@angular/core';

@Component({
  selector: 'app-phonecontactlist',
  templateUrl: './phonecontactlist.component.html',
  styleUrl: './phonecontactlist.component.css'
})
export class PhonecontactlistComponent {
  phoneContactList: string[] = [];
  phoneContactName: string = '';

  addPhoneContacts() {
    this.phoneContactList.push(this.phoneContactName);
  }
}
