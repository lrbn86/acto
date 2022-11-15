import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent {

  start: boolean = false;

  @Output() startEvent = new EventEmitter<boolean>();

  handleStart() {
    this.start = true;
    this.startEvent.emit(this.start);
  }

  handleSettings()
  {
    alert('Change settings');
  }

}
