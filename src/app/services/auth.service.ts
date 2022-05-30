import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  API_URL = 'https://poliscrypts-backend.herokuapp.com/api/login';

  constructor(private http: HttpClient) {}

  login(LoginFrom: any): Observable<any> {
    return this.http.post(this.API_URL, LoginFrom);
  }
}
