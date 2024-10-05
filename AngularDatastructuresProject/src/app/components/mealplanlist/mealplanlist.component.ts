import { Component } from '@angular/core';

@Component({
  selector: 'app-mealplanlist',
  templateUrl: './mealplanlist.component.html',
  styleUrl: './mealplanlist.component.css'
})
export class MealplanlistComponent {
  mealPlanList: string[] = [
    'Adobo with Rice',
    'Sinigang na Baboy',
    'Kare-Kare',
    'Pancit Canton',
    'Lechon Kawali'
  ];
  mealPlanName: string = '';

  addMealPlans() {
    this.mealPlanList.push(this.mealPlanName);
  }
}
