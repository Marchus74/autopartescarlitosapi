import MainProductos from "../organisms/MainProductos";

const Home = () => (
    <div className="min-h-screen bg-gray-100 p-8">
       <h2 className="text-4xl font-bold text-gray-800 mb-4">Bienvenido a Autopartes Carlitos</h2>
       <h3 className="text-2xl font-semibold text-blue-600 mb-8">Estas son las ofertas de la semana</h3>
       <MainProductos/> 
    </div>
)

export default Home;