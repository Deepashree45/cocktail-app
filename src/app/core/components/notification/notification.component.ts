import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
  message = '';
  type: 'success' | 'error'  = 'success';
  visible = false;

  show(message: string, type: 'success' | 'error' , duration = 3000) {
    this.message = message;
    this.type = type;
    this.visible = true;

    setTimeout(() => {
      this.visible = false;
    }, duration);
  }
}
