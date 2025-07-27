import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { NotificationService } from '../services/notification.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private notification: NotificationService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let message = 'An unexpected error occurred.';

        if (error.status === 0) {
          message = 'Cannot connect to the server.';
        } else if (error.status >= 500) {
          message = 'Server error occurred. Please try again later.';
        } else if (error.status >= 400) {
          message = 'Request failed.';
        }

        this.notification.showError(message);
        return throwError(() => error);
      })
    );
  }
}
