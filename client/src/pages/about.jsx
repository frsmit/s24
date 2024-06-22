import { NavLink } from "react-router-dom";
import { Analytics } from "../components/Analytics";
import { useAuth } from "../store/auth";

export const About = () => {

    const {user} = useAuth();

    return (
        <>
            <main>
                <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-content">
                            <p>
                                Welcome{user ?", "+user.username+" to our website" : " to our website"}
                            </p>
                            <h1>HEHE</h1>
                            <p>
                                Some random bullshit that idgaf about
                            </p>
                            <p>
                                Some random bullshit that idgaf about
                            </p>
                            <p>
                                Some random bullshit that idgaf about
                            </p>
                            <p>
                                Some random bullshit that idgaf about
                            </p>
                            <p>
                                Some random bullshit that idgaf about
                            </p>
                            <div className="btn btn-group">
                                <NavLink to="/Contact">
                                    <button className="btn">Connect Now</button>
                                </NavLink>
                                <button className="btn secondary-btn">learn more</button>                
                            </div>
                        </div>
                        <div className="contact-img">
                            <img src="/image/download (1).jpeg" alt="ERROR" />
                        </div>
                    </div>
                </section>
            </main>
            <Analytics/>
        </>
    )
};