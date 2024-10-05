import { Component } from '@angular/core';

@Component({
  selector: 'app-budgetlist',
  templateUrl: './budgetlist.component.html',
  styleUrl: './budgetlist.component.css'
})
export class BudgetlistComponent {
  budgetList: string[] = [
    'Personal Savings Plan',
    'Emergency Fund',
    'Monthly Expenses Tracker',
    'Retirement Savings Account',
    'Investment in Mutual Funds'
  ];
  budgetName: string = '';

  addBudgets() {
    this.budgetList.push(this.budgetName);
  }
}
