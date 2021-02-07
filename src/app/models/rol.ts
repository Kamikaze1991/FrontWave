export class Rol {
  public id: Number 
  public nombre: String 
  public fecha_creacion: String
  public fecha_modificacion: String

  
  constructor() {
    this.id = 0
    this.nombre = ""
    
    this.fecha_creacion = ""
    this.fecha_modificacion=""
  }
  public fromJson(data: any) {
    this.id = data.id
    this.nombre = data.nombre
    
    this.fecha_creacion = data.fecha_creacion
    this.fecha_modificacion = data.fecha_modificacion
    return this
  }
}
