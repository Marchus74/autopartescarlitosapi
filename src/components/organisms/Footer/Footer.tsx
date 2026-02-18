const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-100 py-12">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-2xl font-bold text-blue-400 mb-2">Autopartes Carlitos</h3>
                    <p className="text-gray-400">&copy; 2024 Todos los derechos reservados</p>
                </div>
           
                <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-4">Contacto</h4>
                    <p className="text-gray-400 mb-2">Email: info@autopartescarlitos.com</p>
                    <p className="text-gray-400">Teléfono: +1 (123) 456-7890</p>
                </div>

                <div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-4">Síguenos</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Facebook</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Instagram</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Twitter</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;