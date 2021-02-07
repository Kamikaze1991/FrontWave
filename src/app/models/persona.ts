export class Persona {
  public id: Number 
  public identificador: String 
  public razon_social: String 
  public alias: String 
  public nombre: String
  public apellido: String 
  public telefono_principal: String 
  public direccion_principal: String 
  public posx: String 
  public posy: String 
  public fecha_creacion: String
  public fecha_modificacion: String

  
  constructor() {
    this.id = 0
    this.identificador = ""
    this.razon_social = ""
    this.alias = ""
    this.nombre = ""
    this.apellido = ""
    this.telefono_principal = ""
    this.direccion_principal = ""
    this.posx = ""
    this.posy = ""
    this.fecha_creacion = ""
    this.fecha_modificacion=""
  }
  fromJson(data: any) {
    this.id = data.id
    this.identificador = data.identificador
    this.razon_social = data.razon_social
    this.alias = data.alias
    this.nombre = data.nombre
    this.apellido = data.apellido
    this.telefono_principal = data.telefono_principal
    this.direccion_principal = data.direccion_principal
    this.posx = data.posx
    this.posy = data.posy
    this.fecha_creacion = data.fecha_creacion
    this.fecha_modificacion = data.fecha_modificacion
    return this
  }
}
