import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User, UserRequest, UserResponse } from '../models/user.model';
import { Observable } from 'rxjs';
import { BaseResponse } from '../models/base.model';
import { LocalStorageUtils } from '../utils/localstorage.utils';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;

  private httpOption = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization' : `Bearer ${LocalStorageUtils.readToken()}`
    })
  }

  constructor(private http: HttpClient) { }

  register = (data: User): Observable<BaseResponse> => {
    return this.http.post<BaseResponse>( `${this.baseUrl}/auth/register`, data);
  }

  login = (data: UserRequest): Observable<UserResponse> => {
    return this.http.post<UserResponse>(`${this.baseUrl}/auth/login`, data);
  }

  logout = () => {
    LocalStorageUtils.deleteToken();
  }
}
