import { Component } from '@angular/core';

@Component({
  selector: 'app-enemy',
  templateUrl: './enemy.component.html',
  styleUrls: ['./enemy.component.css']
})
export class EnemyComponent {

  name: string = "Mozzar";

  currentHealth: number = 1000;
  maxHealth: number = 1000;
  currentDamage: number = 1;
}
