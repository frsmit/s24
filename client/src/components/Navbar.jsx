import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";

export const Navbar = () => {
    const { isLoggedIn } = useAuth();
    return(
        <>
            <header>
                <div className="container">
                    <div className="logo-brand">
                        <NavLink to="/">Hehe</NavLink>
                    </div>
                    <nav>

                    <ul>
                        <li>
                            <NavLink className="home-link" to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/About">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Contact">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Service">Service</NavLink>
                        </li>
                        {isLoggedIn ? (
                            <li>
                                <NavLink to ="/Logout">Logout</NavLink>
                            </li>
                        ) : (
                            <>
                                <li>
                                    <NavLink to="/Register">Register</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Login">Login</NavLink>
                                </li>
                            </>
                        )} 
                    </ul>

                        {/* <input type="checkbox" id="sidebar-active"/>
                        <label for="sidebar-active" class="open-sidebar-button">
                            <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                        </label>

                        <label id="overlay" for="sidebar-active"></label>
                        <div class="links-container">
                            <label for="sidebar-active" class="close-sidebar-button">
                            <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                            </label>
                            <NavLink class="home-link" to="/">Home</NavLink>
                            <NavLink to="/About">About</NavLink>
                            <NavLink to="/Contact">Contact</NavLink>
                            <NavLink to="/Service">Service</NavLink>
                            <NavLink to="/Register">SingUp</NavLink>
                            <NavLink to="/Login">Login</NavLink>
                        </div> */}
                        
                    </nav>
                </div>
            </header>
        </>
    );    
};
