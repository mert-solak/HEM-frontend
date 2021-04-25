import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';

import { HttpRequestExtra } from '@interfaces/http.interface';

import { HttpService } from '@services/http.service';

import { urlConfig } from '@configs/url.config';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {
  private requests: (HttpRequest<any> & HttpRequestExtra)[] = [];

  constructor(private _httpService: HttpService) {}

  removeRequest(req: HttpRequest<any> & HttpRequestExtra) {
    const index = this.requests.indexOf(req);

    if (index >= 0) {
      this.requests.splice(index, 1);
    }

    this._httpService.setIsLoading(this.requests.length > 0);
  }

  intercept(req: HttpRequest<any> & HttpRequestExtra, next: HttpHandler): Observable<HttpEvent<any>> {
    const cloneReq = req.clone({ url: `${urlConfig.baseURL}:${urlConfig.basePORT}${req.url}` }) as HttpRequest<any> &
      HttpRequestExtra;

    this.requests.push(cloneReq);

    this._httpService.setIsLoading(true);
    return new Observable((observer) => {
      const subscription = next.handle(cloneReq).subscribe(
        (event) => {
          if (event instanceof HttpResponse) {
            this.removeRequest(cloneReq);
            observer.next(event);
          }
        },
        (err: HttpErrorResponse) => {
          this.removeRequest(cloneReq);
          if (!cloneReq.blockGlobalErrorHandler) {
            this._httpService.setHttpErrorMessage(err.error.errorCode);
          }

          observer.error(err);
        },
        () => {
          this.removeRequest(cloneReq);
          observer.complete();
        },
      );

      return () => {
        this.removeRequest(cloneReq);
        subscription.unsubscribe();
      };
    });
  }
}
