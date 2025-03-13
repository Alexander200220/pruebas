import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Comida } from '../models/comida';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComidasService {

  // crear propuedad 

  API_URI = 'http://localhost:3000/api'



  constructor(private http: HttpClient) { }

  getComidas() {
    return this.http.get(`${this.API_URI}/comidas`);

  }

  getComida(_id : string) {
    return this.http.get(`${this.API_URI}/comidas/${_id}`);
  }

  deleteComida(_id : string) {
    return this.http.delete(`${this.API_URI}/comidas/${_id}`);
  }

  saveComida(comida: Comida) {
    return this.http.post(`${this.API_URI}/comidas`,comida);
  }


  updateComida(_id : any, updatedComida: Comida): Observable<Comida>{
    return this.http.put(`${this.API_URI}/comidas/${_id}`,updatedComida);
  }

 
  
}
