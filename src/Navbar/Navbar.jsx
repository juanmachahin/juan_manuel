import React, {useState} from "react";
import "./Navbar.css"
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const closeMenu = () => {
        setIsOpen(false);
    }

    return(
        <div className="navbar">
            <div className="nav_logo">  JUAN MANUEL</div>
            <div className={`nav_items ${isOpen && "open"}`}>
                <Link to="/" onClick={closeMenu}> HOME</Link>
                <Link to="/Bio" onClick={closeMenu}> BIO</Link>
                <Link to="/Portfolio" onClick={closeMenu}> PORTFOLIO</Link>
                <Link to="/Contact" onClick={closeMenu}> CONTACT</Link>
                <Link to="/Music" onClick={closeMenu}> MUSIC</Link>
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

