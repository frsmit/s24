import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export const AdminUsers = () => {
    
    const [users, setUsers] = useState([]);

    const { authorizatoinToken, API } = useAuth();

    const getAllUserData = async() => {
        try {
            const response = await fetch(`${API}/api/admin/users`,{
                method:"GET",
                headers:{
                    Authorization: authorizatoinToken,
                },
            });
            const data = await response.json();
            console.log(data);
            setUsers(data);
        } catch (error) {
            console.log(error);
        }
    };

    // delete the user on delete button 
    const deleteUser = async (id) => {
        try {
            const response = await fetch(`${API}/api/admin/users/delete/${id}`,{
                method:"DELETE",
                headers:{
                    Authorization: authorizatoinToken,
                },
            });
            const data = await response.json();
            console.log("User Deleted"+ data);

            if (response.ok) {
                getAllUserData();
                toast.success("Deleted");
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllUserData();
    },[]);

    return <>
        <section className="admin-users-section">
            <div className="container">
                <h2>Admin User Data</h2>
            </div>
            <div className="container admin-users">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((curUser,index)=>{
                            return <tr key={index}>
                                <td>{curUser.username}</td>
                                <td>{curUser.email}</td>
                                <td>{curUser.phone}</td>
                                <td><Link to = {`/admin/users/${curUser._id}/edit`}>Edit</Link></td>
                                <td><button onClick={() => deleteUser(curUser._id)}>Delete</button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </section>
    </>
};