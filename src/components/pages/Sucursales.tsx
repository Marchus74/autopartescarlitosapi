const Sucursales = () => (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-blue-900 mb-2 text-center">
                Nuestras Sucursales
            </h1>
            <p className="text-gray-600 text-center mb-12">
                Visítanos en cualquiera de nuestras ubicaciones
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                    { name: "Sucursal Centro", address: "Calle Principal 123", phone: "(555) 123-4567" },
                    { name: "Sucursal Norte", address: "Avenida del Norte 456", phone: "(555) 234-5678" },
                    { name: "Sucursal Sur", address: "Boulevard Sur 789", phone: "(555) 345-6789" },
                    { name: "Sucursal Este", address: "Carrera Este 321", phone: "(555) 456-7890" },
                    { name: "Sucursal Oeste", address: "Paseo Oeste 654", phone: "(555) 567-8901" },
                    { name: "Sucursal Metropolitana", address: "Vía Metropolitana 987", phone: "(555) 678-9012" },
                ].map((sucursal, idx) => (
                    <div key={idx} className="bg-white rounded-lg shadow-md border-l-4 border-blue-600 p-6 hover:shadow-lg transition-shadow">
                        <h2 className="text-xl font-semibold text-blue-900 mb-3">
                            {sucursal.name}
                        </h2>
                        <p className="text-gray-700 mb-2">
                            📍 {sucursal.address}
                        </p>
                        <p className="text-gray-600">
                            📞 {sucursal.phone}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </div>
)

export default Sucursales;