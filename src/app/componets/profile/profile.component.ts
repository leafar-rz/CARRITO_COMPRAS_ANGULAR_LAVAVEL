import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  formForgot: FormGroup;
  user: any;
  id_user: any;
  password: any;


  constructor(private router: Router, private formBuilder: FormBuilder, private registerService: ServiceService) {
    this.formForgot = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {
    this.id_user = localStorage.getItem('id_user')
    if (this.registerService.isLoggedIn()) {
      this.registerService.getCurrentUser(this.id_user).subscribe(
        (response) => {
          this.user = response.data;
          console.log('El usuario logeado es>', this.user)
        },
        (error) => {
          console.log(error);
        }
      );
    }
    else {
      this.router.navigate(['/login']);
    }
  }



  onLogout() {
    this.registerService.deleteLogout().subscribe(
      response => {
        console.log(response);
        this.user = null;
        alert("Pasa un buen dia");
        this.router.navigate(['/login']);
        // Aquí puedes redirigir al usuario a la página de inicio de sesión o hacer cualquier otra acción necesaria.
      },
      error => {
        console.log(error);
        this.router.navigate(['/profile']);
      }
    );
  }

  forgotPassword() {
    if (this.formForgot.valid) {
      const { password } = this.formForgot.value;
      this.registerService.putForgotPasswordManual(this.id_user, password).subscribe(response => {
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
