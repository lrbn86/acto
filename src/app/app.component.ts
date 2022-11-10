import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Editing Text';
  canEdit: boolean = false;
  message: string = 'I am read-only';

  onEdit(): void {
    this.canEdit = !this.canEdit;
  }
}
