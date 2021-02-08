export class Usuario {
  public us_id_usuario: Number
  public us_login: String
  public us_password: String 
  public us_fecha_creacion: String 
  public us_fecha_modificacion: String
  
  constructor() {
    this.us_id_usuario = 0
    this.us_login =""
    this.us_password = ""
    this.us_fecha_creacion = ""
    this.us_fecha_modificacion = ""
  }
  public fromJson(data: any) {
    this.us_id_usuario = data.us_id_usuario
    this.us_login = data.us_login
    this.us_password = data.us_password
    this.us_fecha_creacion = data.us_fecha_creacion
    this.us_fecha_modificacion = data.us_fecha_modificacion
    return this
  }
}
