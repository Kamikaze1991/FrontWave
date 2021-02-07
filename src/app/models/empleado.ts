export class Empleado {
  public id: Number 
  public id_persona: Number
  public id_usuario: Number 
  public rendimiento: String 
  public fecha_creacion: String
  public fecha_modificacion: String

  
  constructor() {
    this.id = 0
    this.id_persona = 0
    this.id_usuario=0
    this.rendimiento = ""
    
    this.fecha_creacion = ""
    this.fecha_modificacion=""
  }
  fromJson(data: any) {
    this.id = data.id
    this.id_persona = data.id_persona
    this.id_usuario=data.id_usuario
    this.rendimiento = data.rendimiento
    this.fecha_creacion = data.fecha_creacion
    this.fecha_modificacion = data.fecha_modificacion
    return this
  }
}
