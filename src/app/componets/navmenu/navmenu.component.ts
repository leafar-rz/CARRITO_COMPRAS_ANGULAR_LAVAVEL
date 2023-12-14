import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { ServiceService } from 'src/app/services/service.service';


@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit{

  departaments:any;
  divDepartaments=false;

  constructor(private router: Router, private registerService: ServiceService){}

  ngOnInit(){
   this.getDepartaments();
  }

  getDepartaments()
  {
    this.registerService.getDepartaments().subscribe(
      (response) => {
        this.departaments = response.DEPARTAMENTOS;
        if(response.DEPARTAMENTOS.length==0)
        {
          console.log("No hay ningun departamentos");
        }
        else
        {
          console.log(this.departaments);
        }
        
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getDepartamentsOnDisplay()
  {
    if(this.divDepartaments==true)
    {
      this.divDepartaments=false;
    }
    else
    {
      this.divDepartaments=true;
    }
   
  }

  seleccionarDepartamento(id_departamento: any,nombre_departamento: any) {
    // Aquí puedes agregar la lógica que deseas realizar cuando se selecciona un departamento.
    // Por ejemplo, puedes mostrar información adicional o navegar a otra página.
    //console.log('Departamento seleccionado:', departamento);
    this.divDepartaments=false;
    this.router.navigate(['/departaments']); // Agregar el valor de "id" al objeto de estado de navegación
    localStorage.setItem('id_departaments',id_departamento);
    localStorage.setItem('nombre_departaments',nombre_departamento);
  }

}
