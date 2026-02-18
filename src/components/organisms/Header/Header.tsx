import Logo from "../../molecules/Header/Logo";
import Nav from "../../molecules/Header/Nav";

const Header = () => (
    <header className="bg-gradient-to-r from-blue-500 to-gray-500 shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Logo/>
            <Nav/>
        </div>
    </header>
)

export default Header;