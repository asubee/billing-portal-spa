// login.component.ts
import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <form (submit)="onLogin($event)">
      <input type="text" [(ngModel)]="username" name="username" required />
      <input type="password" [(ngModel)]="password" name="password" required />
      <button type="submit">ログイン</button>
    </form>
  `
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  onLogin(event: Event) {
    event.preventDefault();
    this.auth.login(this.username, this.password).subscribe({
      next: () => this.router.navigate(['/protected']),
      error: err => alert('ログイン失敗')
    });
  }
}
