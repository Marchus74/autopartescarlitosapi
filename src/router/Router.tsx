import { createBrowserRouter } from "react-router-dom"
import Home from "../components/pages/Home"
import Error404 from "../components/pages/Error404"
import Login from "../components/pages/Login"
import Contacto from "../components/pages/Contacto"
import Sucursales from "../components/pages/Sucursales"
import Tempral from "../components/templates/Tempral"


const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Tempral/>,
    errorElement: <Error404 />,

    children: [
      {
        index: true,
        element: <Home />,
        
      },
      {
        path: "/contacto",
        element: <Contacto />,
        
      },
      {
        path: "/sucursales",
        element: <Sucursales />,
        
      },

    ]
  },
  
  {
    path: "/Login",
    element: <Login />,
    
  },
])

export default router