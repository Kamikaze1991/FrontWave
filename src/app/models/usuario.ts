export class Usuario {
  public id: Number
  public id_rol: Number
  public identificador: String 
  public username: String 
  public password: String
  public path: String 
  public fecha_creacion: String
  public fecha_modificacion: String

  
  constructor() {
    this.id = 0
    this.id_rol = 0
    this.identificador = ""
    this.username = ""
    this.password = ""
    this.path = ""
    this.fecha_creacion = ""
    this.fecha_modificacion=""
  }
  public fromJson(data: any) {
    this.id = data.id
    this.id_rol = data.id_rol
    this.identificador = data.identificador
    this.username = data.username
    this.password = data.password
    this.path = data.path
    this.fecha_creacion = data.fecha_creacion
    this.fecha_modificacion = data.fecha_modificacion
    return this
  }
}
