import { useEffect, useState, } from "react";
import type { Proveedores } from "../Interfaz/proveedores";
import type { datosFormulario } from "../Interfaz/datosFormulario";
import Swal from "sweetalert2";

const useFormularioProveedor = (
    editarProveedor: Proveedores | null,
    setProveedorEdit: (e: Proveedores | null) => void,
    agregarYactualizarProveedor: (e: Proveedores) => void) => {
    const [datosFormulario, setDatosFormulario] = useState<datosFormulario>(
        {
            nombre: "",
            correo: "",
            contacto: "",
            direccion: "",
            telefono: "",
            categoria: ""
        },
    );

    useEffect(() => {
        if (editarProveedor) {
            setDatosFormulario({
                nombre: editarProveedor.nombre,
                correo: editarProveedor.correo,
                contacto: editarProveedor.contacto,
                direccion: editarProveedor.direccion,
                telefono: editarProveedor.telefono,
                categoria: editarProveedor.categoria
            });
        }
    }, [editarProveedor]);

    const Cambios = (e: React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();

        setDatosFormulario((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }

    const CambiosEnvio = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        if (!datosFormulario.nombre.trim() || !datosFormulario.correo.trim() || !datosFormulario.contacto.trim() || !datosFormulario.direccion.trim() || !datosFormulario.telefono.trim() || !datosFormulario.categoria.trim()) {
            Swal.fire("Formulario incompleto", "", "warning");
            return;
        }

        const telefonoValidacion = /^[0-9]{8}$/;
        if (!telefonoValidacion.test(datosFormulario.telefono)) {
            Swal.fire("Teléfono inválido", "Debe tener exactamente 8 números", "info");
            return;
        } const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!correoRegex.test(datosFormulario.correo)) {
            Swal.fire("Correo inválido", "Ingrese un correo válido", "error");
            return;
        }

        const proveedores: Proveedores = {
            id: editarProveedor ? editarProveedor.id : "",
            nombre: datosFormulario.nombre,
            correo: datosFormulario.correo,
            contacto: datosFormulario.contacto,
            direccion: datosFormulario.direccion,
            telefono: datosFormulario.telefono,
            categoria: datosFormulario.categoria
        };

        agregarYactualizarProveedor(proveedores);

        setDatosFormulario({
            nombre: "",
            correo: "",
            contacto: "",
            direccion: "",
            telefono: "",
            categoria: "",
        });
        setProveedorEdit(null);
    }

    const controlCancelar = (): void => {
        setDatosFormulario({
            nombre: "",
            correo: "",
            contacto: "",
            direccion: "",
            telefono: "",
            categoria: "",
        });
        setProveedorEdit(null);
    }

    return {
        datosFormulario,
        Cambios,
        CambiosEnvio,
        controlCancelar,
    };
}

export default useFormularioProveedor;