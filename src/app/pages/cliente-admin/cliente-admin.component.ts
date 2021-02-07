import { Component, OnInit, ElementRef } from '@angular/core';
import { ClienteApiService } from '../../services/cliente-api.service';
import { Cliente } from '../../models/cliente'

@Component({
  selector: 'app-cliente-admin',
  templateUrl: './cliente-admin.component.html',
  styleUrls: ['./cliente-admin.component.css']
})


export class ClienteAdminComponent implements OnInit {
  
  public clientes = [];
  public cliente: Cliente = new Cliente()
  

  constructor(private elRef:ElementRef,public clt: ClienteApiService) { }


  actionSubmit(event) {
    //evitamos la recarga
    event.preventDefault();

    //iniciamos la operacion para insertar
    console.log(new Date());
    
    console.log(this.cliente);
    this.clt.insertar(this.cliente).then(succ => {
      this.reloadTable()
      this.cliente = new Cliente();
      
    }).catch(err => {
      console.log(err)
   })
  }

  ngOnInit() {

    this.reloadTable();
    
      $('#mrecursoshumanos').children().addClass('active');
      $('#mpersona').children().addClass('active');
    
    
  }

  ngAfterViewInit() {
    let loader = this.elRef.nativeElement.querySelector('#loader');
    loader.style.display = "none"; //hide loader
    console.log("cargato");
  }

  reloadTable() {
    this.clt.traertodo().then(items => {
      
      this.clientes = [];
      for (var index in items) {
        let tupla_cliente = new Cliente();
        tupla_cliente = tupla_cliente.fromJson(items[index]);
        this.clientes.push(tupla_cliente);
      }
    }).catch(erro => {
      console.log(erro);
    })
  }

}
