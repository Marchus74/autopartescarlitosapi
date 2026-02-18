import { Link } from "react-router-dom";

const Logo = () => (
  <Link  to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
    <div className="w-10 h-10  from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
      <span className="text-white font-bold text-lg">⚙</span>
    </div>
    <span className="text-xl font-bold text-gray-800">AutoParts</span>
  </Link>
);

export default Logo;

