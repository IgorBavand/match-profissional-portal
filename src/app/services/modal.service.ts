import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginCardComponent } from "../components/login/login-card/login-card.component";
import { RegisterCardComponent } from "../components/register/register-card/register-card.component";

@Injectable({ providedIn: 'root' })
export class ModalService {
  private loginDialogRef?: MatDialogRef<LoginCardComponent>;
  private registerDialogRef?: MatDialogRef<RegisterCardComponent>;

  constructor(private dialog: MatDialog) {}

  openLoginModal(): void {
    this.loginDialogRef = this.dialog.open(LoginCardComponent, {
      width: '400px',
      height: 'auto',
      maxHeight: '70vh',
      disableClose: false,
    });
  }

  openRegisterModal(): void {
    this.registerDialogRef = this.dialog.open(RegisterCardComponent, {
      width: '400px',
      height: 'auto',
      maxHeight: '70vh',
      disableClose: false,
    });
  }

  closeLoginModal(): void {
    if (this.loginDialogRef) {
      this.loginDialogRef.close();
      this.loginDialogRef = undefined;
    }
  }

  closeRegisterModal(): void {
    if (this.registerDialogRef) {
      this.registerDialogRef.close();
      this.registerDialogRef = undefined;
    }
  }

  isModalOpen(): boolean {
    const dialogs = this.dialog.openDialogs;
    return dialogs.length > 0;
  }
}
