import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthSignUpDto } from '../model/dto/auth.dto';
import { AuthSignUpResponse } from '../model/interfaces/auth.interface';

const AUTH_BASE_URL = 'auth';
const DEFAULT_HEADERS = {
  headers:new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authBaseUrl = `${environment.apiBaseUrl}/${AUTH_BASE_URL}`;

  constructor(private http: HttpClient) { }

  register(signUpDto: AuthSignUpDto): Observable<AuthSignUpResponse> {
    let requestUrl = `${this.authBaseUrl}/signup`;
   return this.http.post<AuthSignUpResponse>(requestUrl, signUpDto, DEFAULT_HEADERS);
  }

  

}