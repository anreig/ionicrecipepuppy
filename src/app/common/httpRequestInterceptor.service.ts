import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable()
export class HttpRequestInterceptorService implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const updatedRequest = request.clone({
            headers: request.headers.set(
                'X-Requested-With',
                'For use with cors-anywhere')
        });


        return next.handle(updatedRequest);

    }
}
