import { Component, OnInit } from '@angular/core';
import { UsuarioApiService } from '../../services/usuario-api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: string
  public pass: string
  public condition: boolean

  constructor(public route: Router, public usuarioApi: UsuarioApiService) {
    this.condition = false;
  }

  logear(event) {
    event.preventDefault()
    console.log(this.username)
    console.log(this.pass)

    this.usuarioApi.login(this.username, this.pass).then(succ => {
      
      if (succ)
        
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
