import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from '../models/cliente';
import { AppSettings } from '../app-settings'

@Injectable()
export class RolApiService {


  constructor(public http: HttpClient) { }


  traertodo() {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }

    return new Promise((res, rej) => {
      this.http.get(AppSettings.API_ENDPOINT+"/api/Rol/consultar", httpOptions).subscribe(done => {
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
      this.http.post("http://localhost:3439/api/Cliente/add", val, httpOptions).subscribe(done => {
        res(done)
      },
        err => {
          res(err)
        })
    })
 
  }

}
