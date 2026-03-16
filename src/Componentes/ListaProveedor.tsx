import type { listaProveedoresProps } from "../Interfaz/listaProveedores";

const ListaProveedor: React.FC<listaProveedoresProps> = ({
    proveedores,
    setProveedoresEditar,
    eliminarProveedores
}) => {
    if (!proveedores || proveedores.length === 0) {
        return <p className="text-center text-gray-500 py-10 font-medium">No hay proveedores registrados.</p>
    }

    return (
        <div className="max-w-5xl mx-auto p-4">
            <div className="flex flex-col gap-4">
                {proveedores.map((prov) => (
                    <div
                        key={prov.id}
                        className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 hover:border-blue-200 transition-colors"
                    >
                        <div className="flex flex-col md:flex-row justify-between gap-4">
                            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
                                <div>
                                    <p className="text-xs uppercase tracking-wider text-blue-900 font-bold mb-1">Nombre de Empresa</p>
                                    <p className="text-gray-900 font-semibold">{prov.nombre}</p>
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-wider text-blue-900 font-bold mb-1">Contacto</p>
                                    <p className="text-gray-700">{prov.contacto}</p>
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-wider text-blue-900 font-bold mb-1">Correo Electrónico</p>
                                    <p className="text-gray-700">{prov.correo}</p>
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-wider text-blue-900 font-bold mb-1">Dirección</p>
                                    <p className="text-gray-700">{prov.direccion}</p>
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-wider text-blue-900 font-bold mb-1">Teléfono</p>
                                    <p className="text-gray-700 font-mono">{prov.telefono}</p>
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-wider text-blue-900 font-bold mb-1">Categoría</p>
                                    <span className="inline-block px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-md">
                                        {prov.categoria}
                                    </span>
                                </div>
                            </div>

                            <div className="flex gap-2 items-center justify-end border-t md:border-t-0 pt-4 md:pt-0">
                                <button
                                    onClick={() => setProveedoresEditar(prov)}
                                    className="px-3 py-1 bg-yellow-400 hover:bg-yellow-500 rounded transition"
                                >
                                    Editar
                                </button>
                                <button
                                    onClick={() => eliminarProveedores(prov.id)}
                                    className="px-3 py-1 text-white bg-red-600 hover:bg-red-300 rounded transition"
                                >
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListaProveedor;