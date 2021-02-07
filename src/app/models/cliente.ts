export class Cliente {
  public id: Number 
  public identificador: String 
  public razon_social: String 
  public apodo: String 
  public nombre: String
  public apellido: String 
  public telefono_principal: String 
  public telefono_secundario: String 
  public direccion: String 
  public tipo: String 
  public posx: String 
  public posy: String
  public fecha_creacion: String
  public fecha_modificacion: String

  
  constructor() {
    this.id = 0
    this.identificador = ""
    this.razon_social = ""
    this.apodo = ""
    this.nombre = ""
    this.apellido = ""
    this.telefono_principal = ""
    this.telefono_secundario = ""
    this.direccion = ""
    this.tipo = ""
    this.posx = ""
    this.posy = ""
    this.fecha_creacion = ""
    this.fecha_modificacion=""
  }
  fromJson(data: any) {
    this.id = data.id
    this.identificador = data.identificador
    this.razon_social = data.razon_social
    this.apodo = data.apodo
    this.nombre = data.nombre
    this.apellido = data.apellido
    this.telefono_principal = data.telefono_principal
    this.telefono_secundario = data.telefono_secundario
    this.direccion = data.direccion
    this.tipo = data.tipo
    this.posx = data.posx
    this.posy = data.posy
    this.fecha_creacion = data.fecha_creacion
    this.fecha_modificacion = data.fecha_modificacion
    return this
  }
}
