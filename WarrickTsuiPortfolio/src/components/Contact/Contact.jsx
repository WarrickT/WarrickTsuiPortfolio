import React from "react";

import emailIcon from "../../assets/nav/emailIcon.png";
import instagramIcon from "../../assets/nav/instagramIcon.png";
import linkedinIcon from "../../assets/nav/linkedinIcon.png";
import styles from "./Contact.module.css";

export const Contact = () => {
    return <footer id = "Contact" className = {styles.container}>
        <div className = {styles.text}>
            <h2>Contact Me</h2>

            <p>Reach out to me in these platforms!</p>
        </div>

        <ul className = {styles.links}>
            <li className = {styles.link}>
                
                <a href = "mailto:warricktsui1226@gmail.com">
                    <img src = {emailIcon} alt = "email icon"/>
                </a>
            </li>
            <li className = {styles.link}>
                <a href = "https://www.instagram.com/warrickcwtsui/">
                    <img src = {instagramIcon} alt = "instagram icon"/>
                </a>
            </li>
            <li className = {styles.link}>
                <a href = "https://www.linkedin.com/in/warrick-tsui-1a83772a3/">
                <img src = {linkedinIcon} alt = "linkedin icon"/>
                </a>
            </li>
        </ul>
    </footer>
}