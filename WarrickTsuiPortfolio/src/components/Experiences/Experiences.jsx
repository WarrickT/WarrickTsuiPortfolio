import React from "react";
import resumePDF from "../../assets/about/Resume.pdf";
import styles from "./Experiences.module.css";

import codesky from "../../assets/experiences/codeskyImage.png";
import ece from "../../assets/experiences/ECE.png";
import tmi from "../../assets/experiences/TMI.png";
import uoft from "../../assets/experiences/uoft.png";
import utcca from "../../assets/experiences/UTCCA.png";
import utesca from "../../assets/experiences/UTESCA.png";

const experienceData = [
  {
    title: "University of Toronto Student!",
    description:
      "Ambitious and creative Computer Engineering student in Area 6 (software). I am passionate about AI and ML, and I'm currently trying to juggle multiple design teams to learn more!",
    image: uoft,
    link: "",
    linkText: ""
  },
  {
    title: "Undergraduate Researcher (under Professor Salma Emara)",
    description:
      "I am currently developing an educational ChatBot, \"Alan\", under the amazing Professor Salma Emara and Capstone Project Team!",
    image: ece,
    link: "https://www.askalan.ca/",
    linkText: "This is the deployed version of Alan!"
  },
  {
    title: "ML Developer @ University of Toronto TMI",
    description:
      "Researching large language models like XLS-R to build fine-tuned deepfake audio detection models.",
    image: tmi,
    link: "",
    linkText: ""
  },
  {
    title: "Software Developer @ UTESCA",
    description:
      "Working in a team of 6 to build a stock-trading website for Finliti using the TradingViews API. \nThe link brings you to our client's LinkedIn post, who was very proud of our contributions!",
    image: utesca,
    link: "https://www.linkedin.com/posts/jenniferanneschell_utesca-activity-7316526331360382976-FIaD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEkz-1ABMQU2euk-YvuLkeNnBEvzkASeHZM",
    linkText: "This is our client's proud \nLinkedIn Post for our contribution"
  },
  {
    title: "Backend Software Developer @ UTCCA",
    description:
      "Training ML-based ambient music generator using PyTorch in a backend developer team of 10",
    image: utcca,
    link: "", 
    linkText: ""
  },
  {
    title: "Programming Facilitator @ CodeSky",
    description:
      "Teaching Scratch and web development (HTML, CSS, JS) to elementary and high school students. \nThe link brings you to some courses me and my supervisor developed!",
    image: codesky,
    link: "", 
    linkText: ""
  }
];
export const Experiences = () => {
  return (
    <section className={styles.container} id="Experiences">
      <div className={styles.header}>
        <h2 className={styles.title}>Who am I?</h2>
        <a href={resumePDF} target="_blank" rel="noreferrer">
          <button className={styles.linkButton}>📄 View Resume</button>
        </a>
      </div>
  
      <div className={styles.experienceList}>
        {experienceData.map((item, index) => (
          <div key={index} className={styles.experienceItem}>
            <img src={item.image} alt={item.title} className={styles.image} />
            <div className={styles.textAndButton}>
              <div className={styles.textContent}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              {item.link?.trim() !== "" && item.linkText?.trim() !== "" && (
                <a href={item.link} target="_blank" rel="noreferrer">
                  <button className={styles.linkButton}>
                    {item.linkText}
                  </button>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
  
};