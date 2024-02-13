import { Outlet } from "react-router-dom";
import NavBar from "../Header/NavBar/NavBar";


const Root = () => {
    return (
        <div className="max-w-[1400px] mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>

        </div>
    );
};

export default Root;