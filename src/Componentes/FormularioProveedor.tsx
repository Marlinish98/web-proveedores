import useFormularioProveedor from "../Hooks/useFormularioProveedor";
import type { Props } from "../Interfaz/Props";

const FormularioProveedor: React.FC<Props> = ({
    agregarYactualizarProveedor,
    editarProveedor,
    setProveedorEdit }) => {


    const {
        datosFormulario,
        Cambios,
        CambiosEnvio,
        controlCancelar,
    } = useFormularioProveedor(editarProveedor, setProveedorEdit, agregarYactualizarProveedor);

    return (
        <div className="bg-white ">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700 text-center">
                {editarProveedor ? "Editar Proveedor" : "Ingrese la información del proveedor"}
            </h2>
            <form onSubmit={CambiosEnvio}>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">Nombre de Proveedor</label>
                    <input className="w-full border px-3 py-2 rounded hover:bg-gray-100" name="nombre" value={datosFormulario.nombre} onChange={Cambios} placeholder="Ejem: DHL" />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">Contacto de la empresa</label>
                    <input className="w-full border px-3 py-2 rounded hover:bg-gray-100" name="contacto" value={datosFormulario.contacto} onChange={Cambios} placeholder="Marlon Martinez" />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">Correo Electronico</label>
                    <input className="w-full border px-3 py-2 rounded hover:bg-gray-100" name="correo" value={datosFormulario.correo} onChange={Cambios} placeholder="xxxxxxx@gmail.com" />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">Direccion</label>
                    <input className="w-full border px-3 py-2 rounded hover:bg-gray-100" name="direccion" value={datosFormulario.direccion} onChange={Cambios} placeholder="Aeropuerto Toncontin" />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">Telefono/Celular</label>
                    <input className="w-full border px-3 py-2 rounded hover:bg-gray-100" maxLength={8} name="telefono" value={datosFormulario.telefono} onChange={Cambios} placeholder="00000000" />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">Categoria</label>
                    <input className="w-full border px-3 py-2 rounded hover:bg-gray-100" name="categoria" value={datosFormulario.categoria} onChange={Cambios} placeholder="Envios" />
                </div>

                <div className="flex gap-2 justify-end">
                    <button type="button" onClick={controlCancelar} className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-400 text-white">Cancelar</button>
                    <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-800">{editarProveedor ? "Actualizar" : "Agregar"}</button>
                </div>
            </form>
        </div>
    )
}

export default FormularioProveedor