  import { Component } from '@angular/core';

  @Component({
    selector: 'app-budgetlist',
    templateUrl: './budgetlist.component.html',
    styleUrl: './budgetlist.component.css'
  })
  export class BudgetlistComponent {
    budgetList: string[] = ['Groceries', 'Rent', 'Utilities', 'Entertainment', 'Transportation'];
    budgetName: string = '';

    addBudgets() {
      this.budgetList.push(this.budgetName);
      this.budgetName = '';
    }
  }
