import { Link } from "react-router-dom";
import LogButton from "../../atoms/LogButton";

const Logo = () => (
  <nav className="flex justify-end">
    <ul className="flex gap-6 items-center pr-8">
      <li>
        <Link
          to="/"
          className="text-gray-700 hover:text-blue-600 transition"
        >
          Homeless
        </Link>
      </li>
      <li>
        <Link
          to="/contacto"
          className="text-gray-700 hover:text-blue-600 transition"
        >
          Contacto
        </Link>
      </li>
      <li>
        <Link
          to="/sucursales"
          className="text-gray-700 hover:text-blue-600 transition"
        >
          Sucursales
        </Link>
      </li>
      <li>
        <LogButton />
      </li>
    </ul>
  </nav>
);

export default Logo;