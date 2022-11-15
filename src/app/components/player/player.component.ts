import { Component } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {

  level: number = 1;
  currentHealth: number = 100;
  currentMana: number = 100;
  currentExperience: number = 100;

  maxHealth: number = 100;
  maxMana: number = 100;
  maxExperience: number = 100;

}
