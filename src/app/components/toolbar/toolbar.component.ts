import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  isLoggedIn: boolean = false;
  isMenuOpen: boolean = false;

  constructor(  private router: Router) {}

  ngOnInit() {
    // this.authService.isLogged().subscribe(status => {
    //   this.isLoggedIn = status;
    // });
  }
  toggleSidenav() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() {
    // this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
