import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettings } from '../app-settings';

@Injectable()
export class UsuarioApiService {

  constructor(public http: HttpClient) { }

  login(uname: String, pass: String) {

    let url = AppSettings.API_ENDPOINT+"/api/Usuario/autenticar"

    var request = new Object
    request['username'] = uname
    request['password'] = pass


    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }

    return new Promise((res, rej) => {
      this.http.post(url, request, httpOptions).subscribe(done => {
        res(done)
      },
        err => {
          res(null)
        })
    });

    

  }

}
