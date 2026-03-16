import type { Proveedores } from "./proveedores";

export interface Props{
    agregarYactualizarProveedor:(e:Proveedores)=>void;
    editarProveedor:Proveedores | null;
    setProveedorEdit:(e:Proveedores | null)=>void;
}