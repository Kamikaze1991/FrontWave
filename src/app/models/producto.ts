export class Producto {
  public pr_id_producto:Number
	public pr_nombre:String
	public pr_descripcion:String
	public pr_precio_base:Number
	public pr_fecha_creacion:String
	public pr_fecha_modificacion:String
  
  constructor() {
    this.pr_id_producto = 0
    this.pr_nombre =""
    this.pr_descripcion = ""
    this.pr_precio_base = 0.0
    this.pr_fecha_creacion = ""
    this.pr_fecha_modificacion=""
  }
  public fromJson(data: any) {
    this.pr_id_producto = data.pr_id_producto
    this.pr_nombre = data.pr_nombre
    this.pr_descripcion = data.pr_descripcion
    this.pr_precio_base = data.pr_precio_base
    this.pr_fecha_creacion = data.pr_fecha_creacion
    this.pr_fecha_modificacion = data.pr_fecha_modificacion
    return this
  }
}
