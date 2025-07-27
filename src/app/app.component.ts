import { Component, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { NotificationComponent } from './core/components/notification/notification.component';
import { NotificationService } from './core/services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit, OnDestroy {
  @ViewChild(NotificationComponent) notificationComp!: NotificationComponent;

  isOnline = navigator.onLine;

  constructor(private notificationService: NotificationService) {}

  private offlineHandler = () => {
    if (this.isOnline) {
      this.isOnline = false;
      this.notificationService.showError('Internet connection lost.');
    }
  };

  private onlineHandler = () => {
    if (!this.isOnline) {
      this.isOnline = true;
      this.notificationService.showSuccess('Internet connection restored.');
    }
  };

  ngAfterViewInit(): void {
    this.notificationService.register(this.notificationComp);
    window.addEventListener('offline', this.offlineHandler);
    window.addEventListener('online', this.onlineHandler);
  }

  ngOnDestroy(): void {
    window.removeEventListener('offline', this.offlineHandler);
    window.removeEventListener('online', this.onlineHandler);
  }
}
