import React, { useState } from "react";
import menuIcon from "../../assets/nav/menuIcon.png";
import styles from "./Navbar.module.css";


export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
    <nav className = {styles.navbar}>
        <a className = {styles.title} href = "/">Warrick Tsui</a>

        <div className = {styles.menu}>
            <img className= {styles.menuBtn}
                src = {menuIcon}
                alt = "menu-button"
                onClick = {() => setMenuOpen(!menuOpen)}
                />
        
            <ul className = {`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                onClick = {() => setMenuOpen(false)}>
                <li>
                    <a href = "#Experiences">About Me</a>
                </li>

                <li>
                    <a href = "#Skills">Skills</a>
                </li>

                <li>
                    <a href = "#Projects">Projects</a>
                </li>

                <li>
                    <a href = "#Contact">Contact</a>
                </li>
            </ul>
        </div>

    </nav>

)
}