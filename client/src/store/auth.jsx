import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [services, setServices] = useState([]);
    const authorizatoinToken = `Bearer ${token}`;

    const API = import.meta.env.VITE_APP_URI_API;

    const storeTokenInLS = (serverToken) =>{
        setToken(serverToken);
        return localStorage.setItem('token',serverToken);
    };

    let isLoggedIn = !!token;

    // dealing with logout
    const LogoutUser =() => {
        setToken("");
        return localStorage.removeItem("token");
    };

    //  jwt authentication - currently logged in user data
    
    const userAuthentication = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(`${API}/api/auth/user`,{
                method: "GET",
                headers:{
                    Authorization: authorizatoinToken,
                },
            });

            if (response.ok) {
                const data = await response.json();
                console.log("user data", data.userData);
                setUser(data.userData);
                setIsLoading(false);
            }else{
                console.error("Error fetching user data");
                setIsLoading(false);
            }
        } catch (error) {
            console.error("Error fetching user data");
        }
    };

    // to get data from services from db

    const getServices = async () => {
        try {
            const response = await fetch(`${API}/api/data/service`,{
                method:"GET",
            });

            if(response.ok){
                const data = await response.json();
                console.log(data.msg);
                setServices(data.msg);
            }
        } catch (error) {
            console.log("services frontend error"+error);
        }
    }; 

    useEffect( () =>{
        getServices();
        userAuthentication();
    }, []);

    return ( 
        <AuthContext.Provider value={{isLoggedIn,storeTokenInLS,LogoutUser,user,services,authorizatoinToken,isLoading,API}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const authContextvalue = useContext(AuthContext);
    if(!authContextvalue){
        throw new Error("useAuth used outside of the Provider");
    }; 
    return authContextvalue;
}