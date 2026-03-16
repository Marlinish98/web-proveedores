import { useEffect, useState } from "react";
import type { Proveedores } from "../Interfaz/proveedores";
import Swal from "sweetalert2";

export const useProveedore = () => {
    const [proveedores, setProveedor] = useState<Proveedores[]>(() => {
        const proveedoresSave = localStorage.getItem("proveedores");
        return proveedoresSave ? JSON.parse(proveedoresSave) : [];
    });

    const [editarProveedor, setProveedorEdit] = useState<Proveedores | null>(null);

    useEffect(() => {
        localStorage.setItem("proveedores", JSON.stringify(proveedores));
    }, [proveedores]);

    const agregarYactualizarProveedor = (proveedores: Proveedores): void => {
        if (!proveedores.id) {
            proveedores.id = Date.now().toString();
            setProveedor((prev) => [proveedores, ...prev]);
            Swal.fire({
                icon: "success",
                title: "Proveedor cargado correctamente"
            })
        }
        else {
            setProveedor((prev) => prev.map((e) => (e.id === proveedores.id ? proveedores : e)));
            setProveedorEdit(null);
            Swal.fire({
                icon: "success",
                title: "Proveedor Actualizado"
            })
        }
    }
    const eliminarProveedores = (id: string): void => {
        Swal.fire({
            title: "Desea eliminar el proveedor",
            text: "No podra revertir esta acción",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#008000",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, Eliminar",
            cancelButtonText: "Cancelar"
        })
            .then((resultado) => {
                if (resultado.isConfirmed) {
                    setProveedor(proveedores.filter(prov => prov.id !== id));
                    Swal.fire("Eliminado", "Proveedores borrado con exito", "success")
                }
            });
    }

    return {
        proveedores,
        editarProveedor,
        setProveedorEdit,
        agregarYactualizarProveedor,
        eliminarProveedores
    }

};

