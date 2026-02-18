import { Outlet } from "react-router-dom";
import Header from "../organisms/Header/Header";
import Footer from "../organisms/Footer/Footer";    

const Tempral = () => (
    <div className="flex flex-col min-h-screen">
        <Header />
        <Outlet />
        <Footer />
    </div>
)

export default Tempral;