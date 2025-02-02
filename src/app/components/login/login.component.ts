import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {ToastService} from "../../services/toast.service";
import {LoginDto} from "../../dto/login.dto";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router, private toastService: ToastService
  ) {}

  credentials : LoginDto = {
    email: '',
    password: ''
  };

  onSubmit() {
    console.log('Login realizado:', this.credentials);
    this.login();

  }

  login() {
    this.authService.login(this.credentials)
      .subscribe({
        next: (response) => {
          this.toastService.showToast('success', 'Login bem-sucedido!');
          this.router.navigate(['/']);
        },
        error: () => {
          this.toastService.showToast('error', 'Credenciais inválidas!');

        }
      });
  }
}
