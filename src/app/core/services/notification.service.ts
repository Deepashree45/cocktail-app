import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private componentRef: any;

  register(ref: any) {
    this.componentRef = ref;
  }

  showError(message: string, duration = 4000) {
    this.componentRef?.show(message, 'error', duration);
  }

  showSuccess(message: string, duration = 4000) {
    this.componentRef?.show(message, 'success', duration);
  }

 
}
