import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { ErrorHeandlerService } from './error-heandler.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterseptorService implements HttpInterceptor{

  constructor(private errorHeandler : ErrorHeandlerService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error:HttpResponse<any>)=> {
        if(error.status == 400){
          console.log("bad requset")
        }
        else if(error.status == 401){
          console.log("not aouth", error.statusText)
        }
        else {
          console.log("unknown error", error.statusText)
        }
        this.errorHeandler.showDialog(error.statusText)

        throw error
      })
    )
  }
  
}
