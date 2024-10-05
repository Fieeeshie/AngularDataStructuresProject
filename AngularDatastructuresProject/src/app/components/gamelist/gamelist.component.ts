import { Component } from '@angular/core';

@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrl: './gamelist.component.css'
})
export class GamelistComponent {
  gameList: string[] = [];
  gameName: string = '';

  addGames() {
    this.gameList.push(this.gameName);
  }
}
