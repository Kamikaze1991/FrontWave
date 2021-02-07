export class Empleadoconsolidado {
  public id: String 
  public identificador: String 
  public razon_social: String  
  public nombre: String
  public apellido: String 
  public rendimiento: String
  public username: String 

  
  constructor() {
    this.id = ""
    this.identificador = ""
    this.razon_social = ""
    this.nombre = ""
    this.apellido = ""
    this.rendimiento = ""
    this.username = ""
  }
  fromJson(data: any) {
    this.id = data.id
    this.identificador = data.identificador
    this.razon_social = data.razon_social
    this.nombre = data.nombre
    this.apellido = data.apellido
    this.rendimiento = data.rendimiento
    this.username = data.username
    return this
  }
}
