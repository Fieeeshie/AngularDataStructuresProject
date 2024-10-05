import { Component } from '@angular/core';

@Component({
  selector: 'app-exerciselist',
  templateUrl: './exerciselist.component.html',
  styleUrl: './exerciselist.component.css'
})
export class ExerciselistComponent {
  exerciseList: string[] = [];
  exerciseName: string = '';

  addExercises() {
    this.exerciseList.push(this.exerciseName);
  }

}
