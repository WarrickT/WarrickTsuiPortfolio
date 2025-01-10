import React, { useState } from "react";
import { getImageUrl } from "../../utils";
import styles from "./Navbar.module.css";


export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    console.log("Path being passed:", "nav/menuIcon.png");
    console.log("Generated URL:", getImageUrl("nav/menuIcon.png"));
        return (
    <nav className = {styles.navbar}>
        <a className = {styles.title} href = "/">Warrick Tsui</a>

        <div className = {styles.menu}>
            <img className= {styles.menuBtn}
                src = {getImageUrl("nav/menuIcon.png")}
                alt = "menu-button"
                onClick = {() => setMenuOpen(!menuOpen)}
                />
        
            <ul className = {`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                onClick = {() => setMenuOpen(false)}>
                <li>
                    <a href = "#about">About Me</a>
                </li>

                <li>
                    <a href = "#skills">Skills</a>
                </li>

                <li>
                    <a href = "#experience">Experience</a>
                </li>

                <li>
                    <a href = "#projects">Projects</a>
                </li>
            </ul>
        </div>

    </nav>

)
}