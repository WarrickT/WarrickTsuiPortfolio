import React from "react";

import emailIcon from "../../assets/nav/emailIcon.png";
import instagramIcon from "../../assets/nav/instagramIcon.png";
import linkedinIcon from "../../assets/nav/linkedinIcon.png";
import styles from "./Contact.module.css";

export const Contact = () => {
    return <footer id = "contact" className = {styles.container}>
        <div className = {styles.text}>
            <h2>Contact Me</h2>

            <p>Reach out to me in these platforms!</p>
        </div>

        <ul className = {styles.links}>
            <li className = {styles.link}>
                <img src = {emailIcon} alt = "email icon"/>
                <a href = "mailto:warricktsui1226@gmail.com">warricktsui1226@gmail.com</a>
            </li>
            <li className = {styles.link}>
                <img src = {instagramIcon} alt = "instagram icon"/>
                <a href = "https://www.instagram.com/warrickcwtsui/">Instagram Account</a>
            </li>
            <li className = {styles.link}>
                <img src = {linkedinIcon} alt = "linkedin icon"/>
                <a href = "https://www.linkedin.com/in/warrick-tsui-1a83772a3/">LinkedIn</a>
            </li>
        </ul>
    </footer>
}