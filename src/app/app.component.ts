import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  keyBindings: any = {
    Action1: '1',
    Action2: '2',
    Action3: '3',
    Action4: '4',
    Action5: 'q',
    Action6: 'w',
    Action7: 'e',
    Action8: 'r',
  };

  buttons = document.getElementsByClassName('action-button');

  @HostListener('window:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent): void {
    if (event.repeat) return;
    const key: string = event.key;
    let actionName: string = this.getActionType(key);
    if (actionName) this.handleAction(actionName);
  }

  @HostListener('window:keyup', ['$event'])
  handleKeyUp(event: KeyboardEvent): void {
    const key: string = event.key;
    let actionName: string = this.getActionType(key);
    if (actionName) this.handleAction(actionName);
  }

  // When the user clicks on the button
  handleActionButton(event: Event): void {
    const target = event.currentTarget as HTMLButtonElement;
  }

  handleAction(actionName: string): void {
    const targetButton = this.buttons.namedItem(actionName) as HTMLButtonElement;
    targetButton.classList.toggle('active');
  }

  getActionType(key: string): string {
    switch (key) {
      case this.keyBindings.Action1:
        return 'Action1';
      case this.keyBindings.Action2:
        return 'Action2';
      case this.keyBindings.Action3:
        return 'Action3';
      case this.keyBindings.Action4:
        return 'Action4';
      case this.keyBindings.Action5:
        return 'Action5';
      case this.keyBindings.Action6:
        return 'Action6';
      case this.keyBindings.Action7:
        return 'Action7';
      case this.keyBindings.Action8:
        return 'Action8';
    }
    return 'Unknown action type';
  }

}
