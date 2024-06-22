import { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const defaultContactFormData = {
    username:"",
    email:"",
    message:"",
};

// const URL = "http://localhost:2025/api/form/contact";

export const Contact = () => {
    const[contact, setContact] = useState(defaultContactFormData);
    
    const [userData, setUserData] = useState(true); 
    const {user, API} = useAuth();
    
    if (userData && user) {
        setContact({
            username: user.username,
            email: user.email,
            message: "",
        });

        setUserData(false);
    }

    // handleInput function
    const handleInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;

        setContact ({
            ...contact,
            [name]: value,
        })
    };

    // handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(contact);
        
        try {
            const response = await fetch(`${API}/api/form/contact`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(contact),

            });

            console.log(response);
            const res_data = await response.json();

            if (response.ok) {
                toast.success("Sent successfully");
                setContact(defaultContactFormData);
            }else {
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
                console.log("invalid credential");
            }
        } catch (error) {
            console.log("contact",error);
        }
    };

    return (
        <>
            <section className="section-contact">
                <div className="contact-content container">
                    <h1 className="main-heading">contact us</h1>
                </div>
                {/* main contact page */}
                <div className="container grid grid-two-cols">
                    <div className="contact-img">
                        <img src="/image/download (1).jpeg" alt="ERROR" />
                    </div>
                    {/* contact-from */}
                    <form className="section-form" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username">username</label>
                            <input type="text" name="username" id="username" autoComplete="off" value={contact.username} onChange={handleInput} required />
                        </div>
                        <div>
                            <label htmlFor="email">email</label>
                            <input type="email" name="email" id="email" autoComplete="off" value={contact.email} onChange={handleInput} required />
                        </div>
                        <div>
                            <label htmlFor="message">message</label>
                            <textarea name="message" id="message" cols="30" rows="6" autoComplete="off" value={contact.message} onChange={handleInput} required ></textarea>
                        </div>
                        <div className="bttn">
                            <button type="submit">submit</button>
                        </div>
                    </form>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1798.2458465034285!2d-74.01480482731807!3d40.71191887416992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a19881b83fb%3A0x979b0a4fe0492ce6!2sWorld%20Trade%20Center%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1717520585951!5m2!1sen!2sin" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </section>
        </>
    )
};