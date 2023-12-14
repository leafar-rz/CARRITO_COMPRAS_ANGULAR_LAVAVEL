import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  baseurl = 'http://127.0.0.1:8000';
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private http: HttpClient) { }

  postResgister(name: string, email: string, password: string): Observable<any> {
    return this.http.post(
      `${this.baseurl}/api/register`,
      { name, email, password },
      { headers: this.httpHeaders }
    );
  }

  postLogin(email: string, password: string): Observable<any> {
    return this.http.post(
      `${this.baseurl}/api/login`,
      { email, password },
      { headers: this.httpHeaders }
    );
  }

  putForgotPassword(email: string): Observable<any> {
    return this.http.put(
      `${this.baseurl}/api/updateRandomPassword`,
      { email },
      { headers: this.httpHeaders }
    );
  }

  putForgotPasswordManual(id: string, newPassword: string): Observable<any> {
    return this.http.put(
      `${this.baseurl}/api/updateManualPassword`,
      { id, newPassword },
      { headers: this.httpHeaders }
    );
  }

  deleteLogout(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    });

    return this.http.delete(
      `${this.baseurl}/api/logout/`,
      { headers }
    );
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('access_token');
    return !!token;
  }

  //metodo del usuario corriendo ahora, headers es el id y el token
  getCurrentUser(id: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    });

    return this.http.get(`${this.baseurl}/api/showById/` + id, { headers });
  }

  getStore() {
    return this.http.get<any>(this.baseurl + `/api/getStore`);
  }

  getDepartaments() {
    return this.http.get<any>(this.baseurl + `/api/getDepartaments`);
  }

  getCategoriesforDepartament(DEPARTAMENTO_id:any) {
    return this.http.get<any>(
      this.baseurl + `/api/getCategoriesforDepartament?DEPARTAMENTOS_id=${DEPARTAMENTO_id}`,
      { headers: this.httpHeaders }
    );
  }


  getArticlesforDepartament(DEPARTAMENTO_id:any) {
    return this.http.get<any>(this.baseurl + `/api/getArticlesforDepartament?DEPARTAMENTOS_id=${DEPARTAMENTO_id}`,
    { headers: this.httpHeaders }
    );
  }

  getArticlesforCategory(CATEGORIA_id:any) {
    return this.http.get<any>(this.baseurl + `/api/getArticlesforCategory?CATEGORIAS_id=${CATEGORIA_id}`,
    { headers: this.httpHeaders });
  }

  getArticlesforDepartamentZamora(DEPARTAMENTO_id:any) {
    return this.http.get<any>(this.baseurl + `/api/zamora/getArticlesforDepartament?DEPARTAMENTOS_id=${DEPARTAMENTO_id}`,
    { headers: this.httpHeaders }
    );
  }

  getArticlesforDepartamentlaPiedad(DEPARTAMENTO_id:any) {
    return this.http.get<any>(this.baseurl + `/api/laPiedad/getArticlesforDepartament?DEPARTAMENTOS_id=${DEPARTAMENTO_id}`,
    { headers: this.httpHeaders }
    );
  }
  

}
