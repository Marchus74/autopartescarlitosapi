



const Error404 = () => (
    <div>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
            <h1 className="text-9xl font-bold text-white">404</h1>
            <p className="text-2xl font-semibold text-gray-300 mt-4">Página no encontrada</p>
            <p className="text-gray-400 mt-2 text-center max-w-md">
                Lo sentimos, la página que buscas no existe o ha sido movida.
            </p>
            <a
                href="/"
                className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200"
            >
                Volver al inicio
            </a>
        </div>
    </div>
)

export default Error404;