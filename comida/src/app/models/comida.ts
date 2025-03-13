export class Comida{

    constructor(_id = '', titulo = '', descripcion = '',precio=0,cantidad=0,imagen='') {
        this._id = _id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.cantidad = cantidad;
        this.imagen = imagen;
    }
    _id?: string;
    titulo?: string;
    descripcion?: string;
    precio?: number;
    cantidad?: number;
    imagen?: string;
}