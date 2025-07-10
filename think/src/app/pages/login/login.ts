import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  constructor(private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const { email, password, role } = form.value;
      console.log('Login Data:', { email, password, role });

      // Redirect to home page
      this.router.navigate(['/home']);
    }
  }
}
