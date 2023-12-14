import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


  formLog: FormGroup;


  ngOnInit() {

  }

  constructor(private router: Router,private formBuilder: FormBuilder, private registerService: ServiceService){
    this.formLog = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    }

    login() {
      if (this.formLog.valid) {
        const { email, password } = this.formLog.value;
        this.registerService.postLogin(email, password).subscribe(response => {
          console.log("Respone: ", response);
          //redireccionamos a login
          this.router.navigate(['/home']);
          localStorage.setItem('access_token',response.token)
          localStorage.setItem('id_user',response.data.id)
        },
          error => {
            console.log("Error: ", Error)
            alert("Datos incorrectos");
          }
  
        )
      }
      else
      {
        alert("Los valores ingresados no son validos");
      }
    }

}
