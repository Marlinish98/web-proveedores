import type { Proveedores } from "./proveedores";

export interface listaProveedoresProps{
    proveedores:Proveedores[];
    setProveedoresEditar:(proveedores:Proveedores) =>void;
    eliminarProveedores:(id:string)=>void
}