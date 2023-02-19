import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { AuthService } from "src/services/AuthService";
import token from "./token";
@Injectable()
class CustomHttpInterceptor implements HttpInterceptor {
    constructor(
        private authService: AuthService,
    ) { }
    errorHandler(error: any) {
        if (error.status === 403) {
            token.removeToken();
            this.authService.navigateToLogin();
        }
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(req);
        return next.handle(req).pipe(
            catchError(error => {
                this.errorHandler(error);
                return throwError(() => error);
            })
        );
    }

}
export default CustomHttpInterceptor;
