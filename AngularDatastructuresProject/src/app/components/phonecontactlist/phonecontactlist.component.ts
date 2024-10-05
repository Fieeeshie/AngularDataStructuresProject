import { Component } from '@angular/core';

@Component({
  selector: 'app-phonecontactlist',
  templateUrl: './phonecontactlist.component.html',
  styleUrl: './phonecontactlist.component.css'
})
export class PhonecontactlistComponent {
  phoneContactList: string[] = [
    'Walter John Wick - 123-456-7890',
    'Princess Roerenz Tiozon - 987-654-3210',
    'Rodney No Surname - 555-555-5555',
    'Xavier The Tiktoker - 444-444-4444',
  ];
  phoneContactName: string = '';

  addPhoneContacts() {
    this.phoneContactList.push(this.phoneContactName);
  }
}
