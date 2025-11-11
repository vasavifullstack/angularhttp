import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomhttpInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //1.api
    //2.place your info
    //3.return api along with that info

    var authHeaders = new HttpHeaders({
          'Authentication':'VasaviReddy',
          'role':'author',
          'location':'India'
    })

    var myparams = new HttpParams().set("company", "TCS").set("role","fullstackdeveloper");

    //clone is coping with the headers and params
    var clonerequest= request.clone({headers:authHeaders ,params:myparams})
      return next.handle(clonerequest);
  }
}
