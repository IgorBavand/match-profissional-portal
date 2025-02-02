import {Injectable, Injector} from '@angular/core';
import {HttpBaseService} from "./base.service";
import {Observable} from "rxjs";
import {UserRequestDto} from "../dto/user-request.dto";

@Injectable({
  providedIn: 'root'
})
export class UserService extends HttpBaseService{

  private endpoint = 'users';

  constructor(protected override readonly injector: Injector) {
    super(injector);
  }

  registerUser(user: UserRequestDto): Observable<any> {
    return this.httpPost(`${this.endpoint}`, user);
  }


}
