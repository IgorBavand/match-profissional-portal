import {Component, Optional} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {ToastService} from "../../../services/toast.service";
import {LoginDto} from "../../../dto/login.dto";
import {MatDialogRef} from '@angular/material/dialog';
import {ModalService} from "../../../services/modal.service";

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss']
})
export class LoginCardComponent {

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService,
    private modalService: ModalService,
    @Optional() private dialogRef?: MatDialogRef<LoginCardComponent>
  ) {
  }

  credentials: LoginDto = {
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
          this.closeModal();
        },
        error: () => {
          this.toastService.showToast('error', 'Credenciais inválidas!');
        }
      });
  }

  closeModal() {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }

  goToRegister(): void {
    const isModalOpen = this.modalService.isModalOpen();

    if (!isModalOpen) {
      this.router.navigate(['/register']);
    } else {
      this.modalService.openRegisterModal();
    }
  }
}
