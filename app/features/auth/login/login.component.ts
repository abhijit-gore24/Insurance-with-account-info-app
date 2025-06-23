import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  emailValid: boolean = true; // Initialize to true

  constructor(private router: Router) { }

  onLogin() {
   
      this.router.navigate(['/dashboard']);
  
  }

  cnaLogin() {
    this.router.navigate(['/cnadashboard']);
  }

  isEmailValid(email: string): boolean {
    // More lenient email regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = emailRegex.test(email);
    console.log(`Email: ${email}, Valid: ${isValid}`); // Debugging line
    return isValid;
  }

}
