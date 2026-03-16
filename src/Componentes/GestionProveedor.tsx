import { useProveedore } from "../Hooks/useProveedore";
import FormularioProveedor from "./FormularioProveedor";
import ListaProveedor from "./ListaProveedor";

const GestionProveedor: React.FC = () => {
    const {
        proveedores,
        editarProveedor,
        setProveedorEdit,
        agregarYactualizarProveedor,
        eliminarProveedores,
    } = useProveedore();
    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <h1 className="text-4xl font-bold text-center my-6 text-gray-800">
                Formulario para Proveedores
            </h1>

            <div className="px-30">
                <div className="">
                    <FormularioProveedor
                        agregarYactualizarProveedor={agregarYactualizarProveedor}
                        editarProveedor={editarProveedor}
                        setProveedorEdit={setProveedorEdit}
                    />
                </div>

            </div>

            <div className="md:col-span-2">
            <ListaProveedor
              proveedores={proveedores}
              setProveedoresEditar={setProveedorEdit}
              eliminarProveedores={eliminarProveedores}
            />
            </div>
        </div>
            )
}

    export default GestionProveedor;