import { Outlet } from "react-router-dom";
import Header from "../shared/Header";

const Main = () => {
    return (
        <div className="max-w-5xl mx-auto">
                <Header/>
            <div className="pt-20 min-h-screen">
                <Outlet/>
            </div>
            <div className="py-10">
            </div>
        </div>
    );
};

export default Main;