import React, {useState} from "react";
import "./Navbar.css"
import Home from "../Home/Home";
import Bio from "../Bio/Bio";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
        return(
        <div className="navbar">
            <div className="nav_logo">  JUAN MANUEL</div>
        <div className={`nav_items ${isOpen && "open"}`}>
            <a href={Home}> HOME</a>
            <a href={Bio}> BIO</a>
            <a href="../Portfolio/Portfolio.jsx"> PORTFOLIO</a>
            <a href="../Contact/Contact.jsx"> CONTACT</a>
            <a href="../Music/Music.jsx"> MUSIC</a>
            <a href="../Teaching/Teaching.jsx"> TEACHING</a>
        </div>
        <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        </div>
)
}
export default Navbar