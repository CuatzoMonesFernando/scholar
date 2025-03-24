import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://www.higeo.savestudiomx.com'; // Cambia esto por tu endpoint real

  constructor(private http: HttpClient) {}

  async login(email: string, password: string): Promise<boolean> {
    try {
      const response: any = await firstValueFrom(
        this.http.post(`${this.apiUrl}/login`, { email, password })
      );
      localStorage.setItem('token', response.token);
      return true;
    } catch (error) {
      console.error('Login error', error);
      return false;
    }
  }
}
