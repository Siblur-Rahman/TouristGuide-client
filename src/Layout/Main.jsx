import { Outlet } from "react-router-dom";
import Header from "../shared/Header";
import Footer from "../shared/Footer";

const Main = () => {
    return (
        <div className="max-w-5xl mx-auto px-4">
                <Header/>
            <div className="pt-20 min-h-screen">
                <Outlet/>
            </div>
            <div className="py-10">
                <Footer/>
            </div>
        </div>
    );
};

export default Main;