import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  keyBindings: any = {
    Action1: {key: '1', icon: 'icon.jpg', isCooldown: false, cooldown: 5},
    Action2: {key: '2', icon: 'icon.jpg', isCooldown: false, cooldown: 2},
    Action3: {key: '3', icon: 'icon.jpg', isCooldown: false, cooldown: 10},
    Action4: {key: '4', icon: 'icon.jpg', isCooldown: false, cooldown: 3},
    Action5: {key: 'q', icon: 'icon.jpg', isCooldown: false, cooldown: 1},
    Action6: {key: 'w', icon: 'icon.jpg', isCooldown: false, cooldown: 5},
    Action7: {key: 'e', icon: 'icon.jpg', isCooldown: false, cooldown: 10},
    Action8: {key: 'r', icon: 'icon.jpg', isCooldown: false, cooldown: 20}
  };

  buttons = document.getElementsByClassName('action-button');

  @HostListener('window:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent): void {
    if (event.repeat) return;
    const key: string = event.key;
    const actionName: string | null = this.getActionType(key);
    this.handleAction(actionName);
  }

  @HostListener('window:keyup', ['$event'])
  handleKeyup(event: KeyboardEvent): void {
    const key: string = event.key;
    const actionName: string | null = this.getActionType(key);
    this.handleAction(actionName);
  }

  // When the user clicks on the button
  handleActionButton(event: Event): void {
    const target = event.currentTarget as HTMLButtonElement;
  }

  handleAction(actionName: string | null): void {
    if (actionName) {
      const targetButton = this.buttons.namedItem(actionName) as HTMLButtonElement;
      targetButton.classList.toggle('active');
    }
  }

  getActionType(key: string): string | null {
    switch (key) {
      case this.keyBindings.Action1.key:
        return 'Action1';
      case this.keyBindings.Action2.key:
        return 'Action2';
      case this.keyBindings.Action3.key:
        return 'Action3';
      case this.keyBindings.Action4.key:
        return 'Action4';
      case this.keyBindings.Action5.key:
        return 'Action5';
      case this.keyBindings.Action6.key:
        return 'Action6';
      case this.keyBindings.Action7.key:
        return 'Action7';
      case this.keyBindings.Action8.key:
        return 'Action8';
    }
    return null;
  }

}
