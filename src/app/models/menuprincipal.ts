export class Menuprincipal {
  public id: Number 
  public id_recurso: Number 
  public id_menuprincipal: Number  
  public nombre: String
  public nombre_descripcion: String
  public icono: String 
  public nivel: Number
  public fecha_creacion: String
  public fecha_modificacion: String 
  

  
  constructor() {
    this.id = 0
    this.id_recurso = 0
    this.id_menuprincipal = 0
    this.nombre = ""
    this.nombre_descripcion = ""
    this.icono = ""
    this.nivel = 0
    this.fecha_creacion = ""
    this.fecha_modificacion=""
  }
  fromJson(data: any) {
    this.id = data.id
    this.id_recurso =data.id_recurso
    this.id_menuprincipal = data.id_menuprincipal
    this.nombre = data.nombre
    this.nombre_descripcion = data.nombre_descripcion
    this.icono = data.icono
    this.nivel = data.nivel
    this.fecha_creacion = data.fecha_creacion
    this.fecha_modificacion = data.fecha_modificacion
    return this
  }
}
