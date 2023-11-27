import React, {useState} from "react";
import "./Navbar.css"
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return(
        <div className="navbar">
            <div className="nav_logo">  JUAN MANUEL</div>
            <div className={`nav_items ${isOpen && "open"}`}>
                <Link to="/"> HOME</Link>
                <Link to="/Bio"> BIO</Link>
                <Link to="/Portfolio"> PORTFOLIO</Link>
                <Link to="/Contact"> CONTACT</Link>
                <Link to="/Music"> MUSIC</Link>
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
