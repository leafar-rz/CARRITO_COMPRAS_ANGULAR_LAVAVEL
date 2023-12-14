import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { ServiceService } from 'src/app/services/service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formReg: FormGroup;


  ngOnInit() {

  }

  constructor(private router: Router, private formBuilder: FormBuilder, private registerService: ServiceService) {
    this.formReg = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  register() {
    if (this.formReg.valid) {
      const { name, email, password } = this.formReg.value;
      this.registerService.postResgister(name, email, password).subscribe(response => {
        console.log("Respone: ", response);
        //redireccionamos a login
        this.router.navigate(['/login']);
      },
        error => {
          console.log("Error: ", Error)
          alert("Usuario ya existente en la base de datos");
        }

      )
    }
  }

  onSubmit() {
  }


}
