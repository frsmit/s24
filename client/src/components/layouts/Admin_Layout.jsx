import { NavLink, Navigate, Outlet } from "react-router-dom";
import { CiUser, CiPhone, CiHome } from "react-icons/ci";
import { RiCustomerService2Line } from "react-icons/ri";
import { useAuth } from "../../store/auth";

export const AdminLayout = () => {
    const { user, isLoading } = useAuth();
    console.log("admin layout", user);

    if (isLoading) {
        return <h1>Loading ...</h1>
    }

    if (!user.isAdmin) {
        return <Navigate to="/"/>
    }

    return ( 
        <>
            <header>
                <div className="container">
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/admin/users"><CiUser /> users </NavLink>
                            </li>
                            <li>
                                <NavLink to="/admin/contacts"><CiPhone /> contacts</NavLink>
                            </li>
                            <li><NavLink to="/Service"><RiCustomerService2Line /> services</NavLink></li>
                            <li><NavLink to="/"><CiHome /> Home</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <Outlet/>
        </>
    );
};