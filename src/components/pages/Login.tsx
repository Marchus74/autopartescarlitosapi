const Login = () => (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Inicia sesión</h1>
            <form className="login-form space-y-6">
                <div className="form-group">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Correo electrónico
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                        Contraseña
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button type="submit" className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200">
                    Iniciar sesión
                </button>
            </form>
            <a
                href="/"
                className="block text-center mt-6 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-lg transition duration-200"
            >
                Volver al inicio
            </a>
        </div>
    </div>
)

export default Login;