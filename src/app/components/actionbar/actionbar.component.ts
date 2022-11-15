import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-actionbar',
  templateUrl: './actionbar.component.html',
  styleUrls: ['./actionbar.component.css']
})
export class ActionbarComponent {

  keyBindings: any = {
    Action1: {key: '1', icon: 'icon.jpg', isCooldown: false, cooldown: 5},
    Action2: {key: '2', icon: 'icon.jpg', isCooldown: false, cooldown: 2},
    Action3: {key: '3', icon: 'icon.jpg', isCooldown: false, cooldown: 10},
    Action4: {key: '4', icon: 'icon.jpg', isCooldown: false, cooldown: 3},
    Action5: {key: 'q', icon: 'icon.jpg', isCooldown: false, cooldown: 1, damage: 2},
    Action6: {key: 'w', icon: 'icon.jpg', isCooldown: false, cooldown: 5, damage: 10},
    Action7: {key: 'e', icon: 'icon.jpg', isCooldown: false, cooldown: 10},
    Action8: {key: 'r', icon: 'icon.jpg', isCooldown: false, cooldown: 20, damage: 100}
  };

  buttons = document.getElementsByClassName('action-button');

  @HostListener('window:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent): void {
    if (event.repeat) return;
    const key: string = event.key;
    const actionName: string | null = this.getActionType(key);
    this.handleAction(actionName, 'keydown');
  }

  @HostListener('window:keyup', ['$event'])
  handleKeyup(event: KeyboardEvent): void {
    const key: string = event.key;
    const actionName: string | null = this.getActionType(key);
    this.handleAction(actionName, 'keyup');
  }

  // When the user clicks on the button
  handleActionButton(event: Event): void {
    const target = event.currentTarget as HTMLButtonElement;
  }

  handleAction(actionName: string | null, eventListenerType: string): void {
    if (actionName) {
      const targetButton = this.buttons.namedItem(actionName) as HTMLButtonElement;
      targetButton.classList.toggle('active');
      if (eventListenerType === 'keydown') {
        // Induce cooldown
        const binding = this.keyBindings[actionName];
        let time = binding.cooldown;
        if (binding.isCooldown) return; 
        binding.isCooldown = true;
        targetButton.textContent = `${time}`;
        targetButton.style.background = 'rgb(72, 129, 216, 0.8)';
        targetButton.style.color = '#fff';
        const id = setInterval(() => {
          time--;
          targetButton.textContent = `${time}`;
          if (time <= 0) {
            targetButton.textContent = binding.key; 
            targetButton.style.background = 'rgba(0, 0, 0, 0.075)';
            targetButton.style.color = '#000';
            binding.isCooldown = false;
            clearInterval(id);
          }
        }, 900);

        // Deal damage
        this.damage(binding.damage);
      }
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

  enemyHealth = 1000;

  damage(damage: number): void {
    if (this.enemyHealth <= 0) this.enemyHealth = 1000;
    if (damage) this.enemyHealth -= damage;
  }

}
