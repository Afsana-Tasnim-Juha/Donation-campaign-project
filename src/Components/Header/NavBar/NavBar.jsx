import { NavLink } from "react-router-dom";
import Logo from "./logo";



const NavBar = () => {
    return (
        <div>
            <nav className="flex lex-col md:flex-row justify-between items-center py-4 px-5   ">
                <Logo></Logo>
                <ul className="flex  flex-col md:flex-row  gap-12">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                            Home
                        </NavLink>

                    </li>

                    <li>
                        <NavLink
                            to="/Donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                            Donation
                        </NavLink>

                    </li>

                    <li>
                        <NavLink
                            to="/Statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                            Statistics
                        </NavLink>

                    </li>
                </ul>
            </nav>

        </div>
    );
};

export default NavBar;