import { Component, OnInit, ElementRef } from '@angular/core';
import { EmpleadoApiService } from '../../services/empleado-api.service';
import { RolApiService } from '../../services/rol-api.service';
import { PersonaApiService } from '../../services/persona-api.service';
import { Persona } from '../../models/persona'
import { Empleado } from '../../models/empleado'
import { Usuario } from '../../models/usuario'
import { Rol } from '../../models/rol'
import { Empleadoconsolidado } from '../../models/empleadoconsolidado'
import { forEach } from '@angular/router/src/utils/collection';
import { Cliente } from '../../models/cliente';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-empleado-admin',
  templateUrl: './empleado-admin.component.html',
  styleUrls: ['./empleado-admin.component.css']
})


export class EmpleadoComponent implements OnInit {

  myForm: FormGroup;

  public switche = false;

  public validacion: boolean;

  public paginas = [];
  public lista_empleados_consolidado = [];

  //controles de paginacion
  public pagina_actual;
  public next;
  public nextAll;
  public previus;
  public previusAll;
  

  public roles=[]
  public _empleado = new Empleado();
  public _usuario = new Usuario();
  public _persona = new Persona();
  public _rol = new Rol();



  constructor(public empleadoSVC: EmpleadoApiService,
    public rolSVC: RolApiService,
    public personaSVC: PersonaApiService, public fb: FormBuilder) {
    this.myForm = this.fb.group({
      identificador: ['', [Validators.required]],
      razon_social: ['', [Validators.required]],
      alias: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      direccion_principal: ['', [Validators.required]],
      telefono_principal: ['', [Validators.required]],
      posx: ['', [Validators.required]],
      posy: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      path: ['', [Validators.required]],
      rendimiento: ['', [Validators.required]],
    });
        

    }


  limpiar() {
    this.validacion = false;
    this._empleado = new Empleado();
    this._persona = new Persona();
    this._rol = new Rol();
    this._usuario = new Usuario();
    this.consultapaginada(0, 10)
    this.traelroles();
  }

  TriggerPersona(event) {
 
    this.personaSVC.traerporcedula(this._persona.identificador).then(succ => {
      let identificador = this._persona.identificador
      if (succ) {
        
        this._persona.fromJson(succ)
      } else {
        this._persona = new Persona();
        this._persona.identificador = identificador;
      }
      console.log(this._persona)
    })
    
  }


  actionSubmit(event: NgForm) {
    this.validacion = true;
    console.log(event);
    if (event.valid) {

      if (!this._empleado.id && !this._usuario.id) {
        this.empleadoSVC.insertar(this._persona, this._usuario, this._empleado, this._rol).then(succ => {
          console.log(succ)
          this.validacion = false;
          this._empleado = new Empleado();
          this._persona = new Persona();
          this._rol = new Rol();
          this._usuario = new Usuario();
          this.consultapaginada(0, 10)
          this.traelroles();
        }).catch(err => {
          console.log(err)
        })
      } else {
        this.empleadoSVC.modificar(this._persona, this._usuario, this._empleado, this._rol).then(succ => {
          console.log(succ)
          this.validacion = false;
          this._empleado = new Empleado();
          this._persona = new Persona();
          this._rol = new Rol();
          this._usuario = new Usuario();
          this.consultapaginada(0, 10)
          this.traelroles();
        }).catch(err => {
          console.log(err)
        })

      }

      

    }

    
    
    //evitamos la recarga
   
    //iniciamos la operacion para insertar

    


    





    
    
   
  }




  paginaGo(pagina) {
    this.consultapaginada(pagina, 10)
  }

  deleteGo(id) {
    this.empleadoSVC.eliminar(id).then(succ => {
      if (succ) {
        this.consultapaginada(0, 10)
      }

    })
    
  }


  registroGo(id) {
    this.empleadoSVC.traerEmpleado(id).then(succ => {
      if (succ) {
        this._empleado = new Empleado().fromJson(succ["empleado"])
        this._persona = new Persona().fromJson(succ["persona"])
        this._rol = new Rol().fromJson(succ["rol"])
        this._usuario = new Usuario().fromJson(succ["usuario"])
      }
    })
  }


  ngOnInit() {




    
    this.reloadJS();
    this.validacion = false;
    this.consultapaginada(0,10)
    

    this.traelroles()
   

    this.reloadTable();
    
      
    
    
  }



  reloadJS() {

    if (!this.switche) {

      console.log("CARGA2")
     
     
    }
    this.switche = true;
    
  }

  ngAfterViewInit() {
   
  }

  reloadTable() {
    
  }



  traelroles() {

    this.rolSVC.traertodo().then(succ => {
      this.roles = []
      if (succ)
        this._rol = this._rol.fromJson(succ[0])
      for (let prop in succ) {
        console.log(succ[prop])
        let role = new Rol().fromJson(succ[prop])
        this.roles.push(role);
      }

      console.log(this.roles);
    })  
  }

  consultapaginada(a, b) {
    this.lista_empleados_consolidado = [];
    this.paginas = []
    $("#tbl_result").css('display', 'none');
    $(".control-container").css('display', 'none');
    
    this.empleadoSVC.traerPaginado(a, b).then(succ => {
      if (succ["tuplas"]) {
        let pag = succ["paginas"]
        let curr = succ["current"]
        this.pagina_actual = curr;
        for (let item in succ["tuplas"]) {
          console.log()
          let tupla = new Empleadoconsolidado().fromJson(succ["tuplas"][item])
          this.lista_empleados_consolidado.push(tupla)
        }

        if (curr > 0) {
          this.paginas.push(curr - 1)
          this.previus = curr - 1;
        }
          
        this.previusAll = 0;
        this.nextAll = pag-1;
        this.next = curr +1;
        if (this.next >= pag)
          this.next = pag-1;
        for (let i = curr; i < (curr + 4); i++) {
          if (i < pag)
            this.paginas.push(i)
        }
        console.log(this.lista_empleados_consolidado)
        console.log(this.paginas)
      }  
      $('#tbl_result').fadeIn();
      $('.control-container').fadeIn();
    })
  }
}
