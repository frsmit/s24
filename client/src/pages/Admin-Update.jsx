import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const AdminUpdate = () => {

    const [data, setData] = useState({
        username:"",
        email:"",
        phone:"",
    });

    const params = useParams();
    const {authorizatoinToken, API} = useAuth();

    // update user data 
    const getSingleUserData = async () => {
        try {
            const response = await fetch(`${API}/api/admin/users/${params.id}`,{
                method:"GET",
                headers:{
                    Authorization: authorizatoinToken,
                },
            });
            const data = await response.json();
            console.log("single User Data"+ data);
            setData(data);
    
            // if (response.ok) {
            //     getAllUserData();
            // }
        } catch (error) {
            console.log(error);
        }
    };
    

    useEffect(() => {
        getSingleUserData();
    }, []);

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setData({
            ...data,
            [name] : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API}/api/admin/users/update/${params.id}`,{
                method: "PATCH",
                headers: {
                    "Content-Type":"application/json",
                    Authorization: authorizatoinToken,
                },
                body:JSON.stringify(data), 
            });
            if (response.ok) {
                toast.success("Updated Successfully");
            } else {
                toast.error("Updation Failed");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section className="section-contact">
            <div className="contact-content container">
                <h1 className="main-heading">Update user data</h1>
            </div>
            {/* main edit user data page */}
            <div className="container grid grid-two-cols">
                {/* updation-from */}
                <form className="section-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">username</label>
                        <input type="text" name="username" id="username" autoComplete="off" value={data.username} onChange={handleInput} required />
                    </div>
                    <div>
                        <label htmlFor="email">email</label>
                        <input type="email" name="email" id="email" autoComplete="off" value={data.email} onChange={handleInput} required />
                    </div>
                    <div>
                        <label htmlFor="phone">phone</label>
                        <input type="phone" name="phone" id="phone" autoComplete="off" value={data.phone} onChange={handleInput} required />
                    </div>
                    <div className="bttn">
                        <button type="submit">Update</button>
                    </div>
                </form>
            </div>
        </section>

    )
};