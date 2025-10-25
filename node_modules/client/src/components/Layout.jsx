import { Link } from "react-router-dom";
import logo from "/images/logo.png";

export default function Layout() {
    return(
        <>
            <h1>My Portfolio</h1>
            <div className="logoContainer">
                <div>
                    <img className="imageLogo" src={logo} alt="Logo" />
                </div>
                <nav>
                    <Link to="/">Home</Link> {" "}
                    <Link to="/about">About</Link> {" "}
                    <Link to="/contact">Contact</Link> {" "}
                    <Link to="/education">Education</Link> {" "}
                    <Link to="/projects">Projects</Link> {" "}
                    <Link to="/services">Services</Link>
                </nav>
            </div>
        </>
    );
}