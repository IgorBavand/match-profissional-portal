import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { UserRequestDto } from '../../dto/user-request.dto';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
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

  constructor(private router: Router, private userService: UserService) {}

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
}
