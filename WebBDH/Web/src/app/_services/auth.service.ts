import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API_ADMIN = 'https://localhost:44399/admin/api/account/login';
const AUTH_API_USER = 'https://localhost:44399/api/accountUser/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  loginAdmin(credentials): Observable<any> {
    return this.http.post(AUTH_API_ADMIN, {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }
  loginUser(credentials): Observable<any> {
    return this.http.post(AUTH_API_USER + 'login', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(AUTH_API_USER + 'register', {
      entity: {
        userName: user.userName,
        email: user.email,
        userPassword: user.userPassword,
        lastName: user.lastName,
        firstName: user.firstName,
        phone: user.phone,
        sex: user.sex === 1 ? true : false,
        delete: 0
      }
    }, httpOptions);
  }
}
