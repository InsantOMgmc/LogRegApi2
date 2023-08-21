import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login: string = '';
  password: string = ''
  
  constructor(private http: HttpClient) {}

  submitForm() {
    const apiKey = 'X9ZO2Lqf'
    const apiUrl = `https://api.nancydrew.me/authUser?key=${apiKey}&login=${this.login}&password=${this.password}&lang=kk`

    this.http.post(apiUrl, {}).subscribe(
      (data) => {
        // Обработка успешного ответа от API
        console.log('Регистрация успешна:', data);
      },
      (error) => {
        // Обработка ошибок
        console.error('Произошла ошибка:', error);
      }
    );
  }
}
