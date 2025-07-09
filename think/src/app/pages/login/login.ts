import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  onSubmit(form: NgForm) {
    if (form.valid) {
      const { email, password, role } = form.value;
      console.log('Login Data:', { email, password, role });
    }
  }
}
