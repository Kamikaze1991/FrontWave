import { Component, OnInit, ElementRef } from '@angular/core';
import { EmpleadoApiService } from '../../services/empleado-api.service';
import { ProductoApiService } from '../../services/producto-api.service';
import { RolApiService } from '../../services/rol-api.service';
import { PersonaApiService } from '../../services/persona-api.service';
import { Persona } from '../../models/persona'
import { Empleado } from '../../models/empleado'
import { Producto } from '../../models/producto'
import { Usuario } from '../../models/usuario'
import { Rol } from '../../models/rol'
import { Empleadoconsolidado } from '../../models/empleadoconsolidado'
import { forEach } from '@angular/router/src/utils/collection';
import { Cliente } from '../../models/cliente';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-producto-admin',
  templateUrl: './producto-admin.component.html',
  styleUrls: ['./producto-admin.component.css']
})


export class ProductoComponent implements OnInit {

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
  public _producto = new Producto();
  public _usuario = new Usuario();
  public _persona = new Persona();
  public _rol = new Rol();



  constructor(public empleadoSVC: EmpleadoApiService,
    public rolSVC: RolApiService,
    public productoSVC: ProductoApiService,
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
    this._producto = new Producto();
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

      if (!this._empleado.id && !this._usuario.us_id_usuario) {
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


  }

  consultapaginada(a, b) {
    
    this.lista_empleados_consolidado = [];
    this.paginas = []
    $("#tbl_result").css('display', 'none');
    $(".control-container").css('display', 'none');
    
    this.productoSVC.traertodo().then(succ => {
      if (succ) {
        console.log(succ);
        let pag = succ["paginas"]
        let curr = succ["current"]
        this.pagina_actual = curr;
        for (let item in succ) {
          console.log("**-*-*--*--*-*-*")
          console.log(item)
          console.log("**-*-*--*--*-*-*")
          let tupla = new Producto().fromJson(succ[item])
          this.lista_empleados_consolidado.push(tupla)
        }
        console.log("**-*-*--*--*-*-*")
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
     
      }  
      $('#tbl_result').fadeIn();
      $('.control-container').fadeIn();
    })
  }
}
