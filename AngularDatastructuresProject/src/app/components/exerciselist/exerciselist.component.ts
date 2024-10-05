import { Component } from '@angular/core';

@Component({
  selector: 'app-exerciselist',
  templateUrl: './exerciselist.component.html',
  styleUrl: './exerciselist.component.css'
})
export class ExerciselistComponent {
  exerciseList: string[] = [
    'Jumping Jacks',
    'Push-Ups',
    'Squats',
    'Lunges',
    'Burpees'
  ];
  exerciseName: string = '';

  addExercises() {
    this.exerciseList.push(this.exerciseName);
  }

}
