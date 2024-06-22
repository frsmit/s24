import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const AdminContacts = () => {
    const [contactData, setContactData] = useState([]);
    const {authorizatoinToken, API} = useAuth(); 
    const getContactsData = async () => {
        try {
            const response = await fetch(`${API}/api/admin/contacts`,{
                method:"GET",
                headers:{
                    Authorization: authorizatoinToken,
                },
            });
            const data = await response.json();
            console.log("Contact Data",data);
            if (response.ok) {
                setContactData(data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    // delete contacts using delete button

    const deleteContact = async(id) => {
        try {
            const response = await fetch(`${API}/api/admin/contacts/delete/${id}`,{
                method:"DELETE",
                headers:{
                    Authorization: authorizatoinToken,
                },
            });
            const data = await response.json();
            console.log("Message Deleted"+ data);
            if (response.ok) {
                getContactsData();
                toast.success("Deleted");
            }else{
                toast.error("Try Again");
            }      
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getContactsData();
    },[])

    return (
        <>
            <section className="admin-contacts-section">
                <h1>Admin Contact Data </h1>
                <div className="container admin-users">
                    {contactData.map((curContactData, index)=> {
                        const { username, email, message } = curContactData;

                        return (
                            <div className="admin-contacts-div" key={index}>
                                <p>{username}</p>
                                <p>{email}</p>
                                <p>{message}</p>
                                <button onClick={() => deleteContact(curContactData._id)} className="btn">delete</button>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
};