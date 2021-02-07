import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Empleado } from '../models/empleado';
import { Usuario } from '../models/usuario';
import { Persona } from '../models/persona';
import { Rol } from '../models/rol';
import { AppSettings } from '../app-settings';
@Injectable()
export class EmpleadoApiService {


  constructor(public http: HttpClient) { }


  traertodo() {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }

    return new Promise((res, rej) => {
      this.http.get(AppSettings.API_ENDPOINT+"/api/Cliente/consultar", httpOptions).subscribe(done => {
        res(done)
      },
        err => {
          res(err)
        })
    })
  }

  traerPaginado(_pagina,_filas,_filtro=null) {


    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    let url = "";
    if (!_filtro)
      url = AppSettings.API_ENDPOINT+"/api/Empleado/consultaCompleta?pagina=" + _pagina + "&filas=" + _filas
    else
      url = AppSettings.API_ENDPOINT +"/api/Empleado/consultaCompleta?pagina=" + _pagina + "&filas=" + _filas + "&filtro=" + _filtro

    return new Promise((res, rej) => {
      this.http.get(url, httpOptions).subscribe(done => {
        res(done)
      },
        err => {
          res(err)
        }
      )
    })

  }


  traerEmpleado(_id) {


    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    let url = "";
    url = AppSettings.API_ENDPOINT + "/api/Empleado/consultaCompletaId?id=" + _id
    
    return new Promise((res, rej) => {
      this.http.get(url, httpOptions).subscribe(done => {
        res(done)
      },
        err => {
          res(err)
        }
      )
    })

  }


  insertar(_persona: Persona,_usuario:Usuario,_empleado: Empleado,_rol: Rol) {
    
   
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }

    var parameters = {}
    
    parameters["Usuario"] = _usuario
    parameters["Persona"] = _persona
    parameters["Empleado"] = _empleado
    parameters["Rol"] = _rol


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


  eliminar(_id) {


    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }



    return new Promise((res, rej) => {
      this.http.delete(AppSettings.API_ENDPOINT + "/api/Empleado/Eliminar?id="+_id, httpOptions).subscribe(done => {
        res(done)
      },
        err => {
          res(err)
        })
    })

  }



  modificar(_persona: Persona, _usuario: Usuario, _empleado: Empleado, _rol: Rol) {


    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }

    var parameters = {}

    parameters["Usuario"] = _usuario
    parameters["Persona"] = _persona
    parameters["Empleado"] = _empleado
    parameters["Rol"] = _rol


    //parameters["personaData"] = _persona
    //parameters["empleadoData"] = _empleado



    console.log(JSON.stringify(parameters));
    return new Promise((res, rej) => {
      this.http.post(AppSettings.API_ENDPOINT + "/api/Empleado?tipo=Modificacion", JSON.stringify(parameters), httpOptions).subscribe(done => {
        res(done)
      },
        err => {
          res(err)
        })
    })

  }

}
