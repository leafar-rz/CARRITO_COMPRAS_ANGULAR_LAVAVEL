import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  formForgot: FormGroup;

  ngOnInit() {

  }

  constructor(private router: Router, private formBuilder: FormBuilder, private registerService: ServiceService) {
    this.formForgot = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  forgotPassword() {
    if (this.formForgot.valid) {
      const {email} = this.formForgot.value;
      this.registerService.putForgotPassword(email).subscribe(response => {
        console.log("Respone: ", response);
        //redireccionamos a login
        this.router.navigate(['/login']);
      },
        error => {
          console.log("Error: ", Error)
        }

      )
    }
  }

  onSubmit() {
  }


}
