import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from '../models/cliente';
import { AppSettings } from '../app-settings';

@Injectable()
export class PersonaApiService {


  constructor(public http: HttpClient) { }


  traertodo() {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }

    return new Promise((res, rej) => {
      this.http.get(AppSettings.API_ENDPOINT+"/api/Rol/AllRoles", httpOptions).subscribe(done => {
        res(done)
      },
        err => {
          res(err)
        })
    })
  }

  traerporcedula(cedula) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }

    return new Promise((res, rej) => {
      this.http.get(AppSettings.API_ENDPOINT+"/api/Persona/consultaCompletaCedula?cedula=" + cedula, httpOptions).subscribe(done => {
        res(done)
      },
        err => {
          res(err)
        })
    })
  }

  insertar(val: Cliente) {
    
   
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }

    return new Promise((res, rej) => {
      this.http.post(AppSettings.API_ENDPOINT+"/api/Cliente/ingreso", val, httpOptions).subscribe(done => {
        res(done)
      },
        err => {
          res(err)
        })
    })
 
  }

}
