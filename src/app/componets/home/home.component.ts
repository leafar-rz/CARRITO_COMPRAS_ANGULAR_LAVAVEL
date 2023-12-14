import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{

  store:any;
  departaments:any;
  categories:any;
  articles:any;

  ngOnInit(){
   //this.getStore();
   //this.getDepartaments();
   //this.getCategoriesforDepartament();
   //this.getArticlesforDepartament();
   //this.getArticlesforCategory();
  }

  constructor(private router: Router, private registerService: ServiceService){}

  getStore() {
    this.registerService.getStore().subscribe(
      (response) => {
        this.store = response.TIENDA;
        if(response.TIENDA.length==0)
        {
          console.log("No hay ninguna tienda");
        }
        else
        {
          console.log(response.TIENDA);
        }
        
      },
      (error) => {
        console.log(error);
      }
    );
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

  getCategoriesforDepartament()
  {
    this.registerService.getCategoriesforDepartament("1").subscribe(
      (response) => {
        this.categories = response.CATEGORIAS;
        if(response.CATEGORIAS.length==0)
        {
          console.log("No hay categorias en ese departamento");
        }
        else
        {
          console.log(response.CATEGORIAS);
        }
        
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getArticlesforDepartament()
  {
    this.registerService.getArticlesforDepartament("1").subscribe(
      (response) => {
        this.articles = response.ARTICULOS;
        if(response.ARTICULOS.length==0)
        {
          console.log("No hay articulos en esta categorias");
        }
        else
        {
          console.log(response.ARTICULOS);
        }
        
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getArticlesforCategory()
  {
    this.registerService.getArticlesforCategory("13").subscribe(
      (response) => {
        this.articles = response.ARTICULOS;
        if(response.ARTICULOS.length==0)
        {
          console.log("No hay articulos en esta categorias");
        }
        else
        {
          console.log(response.ARTICULOS);
        }
        
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
