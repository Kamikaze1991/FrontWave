import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Empleado } from '../models/empleado';
import { Usuario } from '../models/usuario';
import { Persona } from '../models/persona';
import { Rol } from '../models/rol';
import { AppSettings } from '../app-settings';
@Injectable()
export class ProductoApiService {


  constructor(public http: HttpClient) { }


  traertodo() {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }

    return new Promise((res, rej) => {
      this.http.get(AppSettings.API_ENDPOINT+"/api/producto/consultaCompleta", httpOptions).subscribe(done => {
        res(done)
      },
        err => {
          res(err)
        })
    })
  }

  

  insertar(_persona: Persona,_usuario:Usuario,_empleado: Empleado,_rol: Rol) {
    
   
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }


    var parameters = {}
    
    parameters["pr_nombre"] = _usuario
    parameters["pr_descripcion"] = _persona
    parameters["pr_precio_base"] = _empleado


    //parameters["personaData"] = _persona
    //parameters["empleadoData"] = _empleado
    

    

    console.log(JSON.stringify(parameters));
    return new Promise((res, rej) => {
      this.http.post(AppSettings.API_ENDPOINT+"/api/Empleado/Ingresar?tipo=Ingreso", JSON.stringify(parameters), httpOptions).subscribe(done => {
        res(done)
      },
        err => {
          res(err)
        })
    })
 
  }


  

}
