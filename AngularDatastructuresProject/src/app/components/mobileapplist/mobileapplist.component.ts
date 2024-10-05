import { Component } from '@angular/core';

@Component({
  selector: 'app-mobileapplist',
  templateUrl: './mobileapplist.component.html',
  styleUrl: './mobileapplist.component.css'
})
export class MobileapplistComponent {
  mobileAppList: string[] = [
    'Facebook',
    'Instagram',
    'Shopee',
    'Grab',
    'GCash',
    'Messenger',
    'Twitter',
    'TikTok',
    'YouTube'
  ];
  mobileAppName: string = '';

  addMobileApps() {
    this.mobileAppList.push(this.mobileAppName);
  }
}
