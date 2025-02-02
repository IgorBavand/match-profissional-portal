import {Injectable, Injector} from '@angular/core';
import {HttpBaseService} from "./base.service";
import {BehaviorSubject, Observable} from "rxjs";
import {LoginDto} from "../dto/login.dto";
import { map, catchError, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends HttpBaseService{

  private subjectUser: BehaviorSubject<any> = new BehaviorSubject(null);
  private subjectLogin: BehaviorSubject<any> = new BehaviorSubject(false);

  private endpoit = 'users';

  constructor(protected override readonly injector: Injector) {
    super(injector);
  }

  refreshToken() {
    // const refreshToken = this.getRefreshToken();
    //
    // if (!refreshToken) {
    //   this.logout();
    //   return throwError('No refresh token available');
    // }
    //
    // return this.httpPost(`${this.baseUrl}${this.endpointRefresh}`, {
    //   refreshToken: refreshToken,
    // }).pipe(
    //   map((response) => {
    //     this.storeTokens(response.accessToken, response.refreshToken);
    //     return response;
    //   }),
    //   catchError((error) => {
    //     this.logout();
    //     return throwError(error);
    //   })
    // );
  }

  login(login: LoginDto): Observable<any> {
    return this.httpPost(`${this.endpoit}/login`, login).pipe(
      map((response) => {
        this.storeTokens(response.accessToken, response.refreshToken);
        this.subjectUser.next(response.user);
        this.subjectLogin.next(true);
        return response;
      })
    );
  }

  logout() {
    this.clearTokens();
    this.subjectUser.next(null);
    this.subjectLogin.next(false);
  }

  private storeTokens(accessToken: string, refreshToken: string) {
    sessionStorage.setItem('token', accessToken);
    sessionStorage.setItem('refreshToken', refreshToken);
  }

  public getAccessToken(): string | null {
    return sessionStorage.getItem('token');
  }

  private getRefreshToken(): string | null {
    return sessionStorage.getItem('refreshToken');
  }

  private clearTokens() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('refreshToken');
  }

}
