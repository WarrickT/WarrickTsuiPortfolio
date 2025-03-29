import React from "react";
import emailIcon from "../../assets/nav/emailIcon.png";
import instagramIcon from "../../assets/nav/instagramIcon.png";
import linkedinIcon from "../../assets/nav/linkedinIcon.png";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="Contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Let’s Connect</h2>
        <p>Reach out to me on these platforms!</p>
      </div>

      <ul className={styles.links}>
        <li>
          <a href="mailto:warricktsui1226@gmail.com" className={styles.iconLink}>
            <img src={emailIcon} alt="Email" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/warrickcwtsui/" target="_blank" rel="noreferrer" className={styles.iconLink}>
            <img src={instagramIcon} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/warrick-tsui-1a83772a3/" target="_blank" rel="noreferrer" className={styles.iconLink}>
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </li>
      </ul>
    </footer>
  );
};
