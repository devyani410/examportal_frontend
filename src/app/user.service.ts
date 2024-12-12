import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = `${environment.apiBaseUrl}/user`;
  constructor(private http: HttpClient) {}
  // Method to call the registration API
  registerUser(payload: any): Observable<any> {
   const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(this.apiUrl+'/register', payload, {headers});
  }
  LoginUser(userName: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
  
    // Add username and password to the URL
    const url = `${this.apiUrl}/login/${userName}/${password}`;
    console.log(url)
    return this.http.get(url, { headers });
  }
}
