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

  @HostListener('window:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent): void {
    if (event.repeat) return;
    const key: string = event.key;
    let actionName: string = '';
    switch (key) {
      case this.keyBindings.Action1:
        actionName = 'Action1';
        break;
      case this.keyBindings.Action2:
        actionName = 'Action2';
        break;
      case this.keyBindings.Action3:
        actionName = 'Action3';
        break;
      case this.keyBindings.Action4:
        actionName = 'Action4';
        break;
      case this.keyBindings.Action5:
        actionName = 'Action5';
        break;
      case this.keyBindings.Action6:
        actionName = 'Action6';
        break;
      case this.keyBindings.Action7:
        actionName = 'Action7';
        break;
      case this.keyBindings.Action8:
        actionName = 'Action8';
        break;
    }
    if (actionName) this.handleAction(actionName);
  }

  handleActionButton(event: Event): void {
    const target = event.currentTarget as HTMLButtonElement;
    this.handleAction(target.name);
  }

  handleAction(actionName: string): void {
    console.log(`Handling ${actionName}`);
  }
}
