import { Component } from '@angular/core';

@Component({
  selector: 'app-mealplanlist',
  templateUrl: './mealplanlist.component.html',
  styleUrl: './mealplanlist.component.css'
})
export class MealplanlistComponent {
  mealPlanList: string[] = [];
  mealPlanName: string = '';

  addMealPlans() {
    this.mealPlanList.push(this.mealPlanName);
  }
}
