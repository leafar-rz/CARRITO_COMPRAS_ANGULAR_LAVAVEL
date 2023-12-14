import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-departaments',
  templateUrl: './departaments.component.html',
  styleUrls: ['./departaments.component.css']
})
export class DepartamentsComponent implements OnInit{

  id_departament:any;
  nombre_departament:any;
  id_category:any;
  categories:any;
  articles:any;
  cantidad:any;

  constructor( private router: Router,private registerService: ServiceService) {}

  ngOnInit() {
    this.id_departament= localStorage.getItem('id_departaments');
    this.nombre_departament= localStorage.getItem('nombre_departaments');
    console.log(this.id_departament+": "+this.nombre_departament);

    this.getCategories();
  }

  getCategories()
  {
    this.registerService.getCategoriesforDepartament(this.id_departament).subscribe(
      (response) => {
        this.categories = response.CATEGORIAS;
        if(response.CATEGORIAS.length==0)
        {
          console.log("No hay ninguna categoria en el departamento");
        }
        else
        {
          console.log(this.categories);
        }
        
      },
      (error) => {
        console.log(error);
      }
    );
  }

  seleccionarCategorie(id_categorie:any,nombre_categories:any){
    this.id_category=id_categorie;

    this.registerService.getArticlesforCategory(id_categorie).subscribe(
      (response) => {
        this.articles = response.ARTICULOS;
        if(response.ARTICULOS.length==0)
        {
          console.log("No hay ningun articulo en la categoria");
        }
        else
        {
          console.log(this.articles);
        }
        
      },
      (error) => {
        console.log(error);
      }
    );
  }

  seleccionarTodos(){
    this.registerService.getArticlesforDepartament(this.id_departament).subscribe(
      (response) => {
        this.articles = response.ARTICULOS;
        if(response.ARTICULOS.length==0)
        {
          console.log("No hay ningun articulo en el departamento");
        }
        else
        {
          console.log(this.articles);
        }
        
      },
      (error) => {
        console.log(error);
      }
    );
  }

  agregarAlCarrito(articulo:any,cantidad:any){
    console.log(articulo);
  }

  seleccionarZamora(){
    this.registerService.getArticlesforDepartamentZamora(this.id_departament).subscribe(
      (response) => {
        this.articles = response.ARTICULOS;
        if(response.ARTICULOS.length==0)
        {
          console.log("No hay ningun articulo en el departamento");
        }
        else
        {
          console.log(this.articles);
        }
        
      },
      (error) => {
        console.log(error);
      }
    );
  }

  seleccionarLaPiedad(){
    this.registerService.getArticlesforDepartamentlaPiedad(this.id_departament).subscribe(
      (response) => {
        this.articles = response.ARTICULOS;
        if(response.ARTICULOS.length==0)
        {
          console.log("No hay ningun articulo en el departamento");
        }
        else
        {
          console.log(this.articles);
        }
        
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
