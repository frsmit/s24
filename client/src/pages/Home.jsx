import { Analytics } from "../components/Analytics";

export const Home = () => {
    return (
        <>
            <main>
                <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-content">
                            <p>Summer Internship Project</p>
                            <h1>202203103520003</h1>
                            <p>
                                My Summer Internship project on MERN Stack Technology. In this Project I learned about backend technologies like node.js, express, etc.. and in front end i learned about React.js, type script, Html, css, java script etc.. 
                            </p>
                            <div className="btn btn-group">
                                <a href="/contact">
                                    <button className="btn">connect now</button>
                                </a>
                                <a href="/Services">
                                    <button className="btn secondary-btn">learn more</button>
                                </a>
                            </div>
                        </div>
                        {/* hero images */}
                        <div className="hero-image">
                            <img src="/image/download (1).jpeg" alt="ERROR" width="400" height="500" />
                        </div>
                    </div>
                </section>
            </main>

            {/* 2nd section */}
            
            <Analytics/>

            {/* 3rd section */}

            <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        {/* hero images */}
                        <div className="hero-image">
                            <img src="/image/download (1).jpeg" alt="ERROR" width="400" height="500" />
                        </div>
                        <div className="hero-content">
                            <p>Summer Internship Project</p>
                            <h1>202203103520003</h1>
                            <p>
                                My Summer Internship project on MERN Stack Technology. In this Project I learned about backend technologies like node.js, express, etc.. and in front end i learned about React.js, type script, Html, css, java script etc.. 
                            </p>
                            <div className="btn btn-group">
                                <a href="/contact">
                                    <button className="btn">connect now</button>
                                </a>
                                <a href="/Services">
                                    <button className="btn secondary-btn">learn more</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

        </>
    )
};