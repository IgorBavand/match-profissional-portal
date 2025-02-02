import { Component } from '@angular/core';
import {UserRequestDto} from "../../../dto/user-request.dto";
import {Router} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {ModalService} from "../../../services/modal.service";

@Component({
  selector: 'app-register-card',
  templateUrl: './register-card.component.html',
  styleUrls: ['./register-card.component.scss']
})
export class RegisterCardComponent {
  user: UserRequestDto = {
    name: '',
    email: '',
    password: '',
    curriculum: '',
    skills: []
  };

  skillsInput = '';
  isLoading = false;
  errorMessage = '';

  constructor(private router: Router, private userService: UserService, private modalService: ModalService) { }

  onSubmit() {
    if (!this.isValidUser()) {
      this.errorMessage = 'Preencha todos os campos obrigatórios!';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    this.userService.registerUser(this.user).subscribe({
      next: () => this.router.navigate(['/login']),
      error: (error) => {
        console.error('Erro ao cadastrar:', error);
        this.errorMessage = 'Erro ao cadastrar. Tente novamente.';
      },
      complete: () => (this.isLoading = false)
    });
  }

  private isValidUser(): boolean {
    return !!(this.user.name && this.user.email && this.user.password && this.user.password.length >= 6);
  }

  updateSkills() {
    // @ts-ignore
    this.user.skills = this.skillsInput.split(',').map(skill => skill.trim());
  }

  goToLogin(): void {
    const isModalOpen = this.modalService.isModalOpen();
    if (!isModalOpen) {
      this.router.navigate(['/login']);
    } else {
      this.modalService.closeRegisterModal();
      this.modalService.openLoginModal();
    }
  }
}
