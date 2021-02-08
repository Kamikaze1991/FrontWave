import { Component, OnInit } from '@angular/core';
import { UsuarioApiService } from '../../services/usuario-api.service';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public username: string
  public pass: string
  public condition: boolean
  public _usuario = new Usuario();

  constructor(public route: Router, public usuarioApi: UsuarioApiService) {
    this.condition = false;
  }

  logear(event) {
    event.preventDefault()
    console.log(this.username)
    console.log(this.pass)

    this.usuarioApi.login(this.username, this.pass).then(succ => {

      if(succ[0])
        this._usuario.fromJson(succ[0])
      console.log("******user*********")
      console.log(this._usuario)
      if (this._usuario.us_id_usuario!=0)
        this.route.navigate(['/home'])
      else
        this.condition = true;
    }).catch(err => {
      
      console.log(err)
      })

    
      

  }

  ngOnInit() {

  }

}
