import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.auth.getToken();
    if (!authToken) {
      return next.handle(req);
    }
    const authReq = req.clone({
      headers: req.headers.set('Authorization', authToken),
    });

    return next.handle(authReq);
  }
}
