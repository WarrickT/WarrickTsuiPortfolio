import React from "react";
import resumePDF from "../../assets/about/Resume.pdf";
import styles from "./Experiences.module.css";

import codesky from "../../assets/experiences/codeskyImage.png";
import compIcon from "../../assets/experiences/compIcon.png";
import tmi from "../../assets/experiences/TMI.png";
import uoft from "../../assets/experiences/uoft.png";
import utcca from "../../assets/experiences/UTCCA.png";
import utesca from "../../assets/experiences/UTESCA.png";
import utfr from "../../assets/experiences/utfr.png";

const experienceData = [
  {
    title: "University of Toronto Student!",
    description:
      "Ambitious and creative Computer Engineering student in Area 6 (software). I am passionate about AI and ML, and I'm currently trying to juggle multiple design teams to learn more!",
    image: uoft,
  },
  {
    title: "ML Developer @ University of Toronto TMI Lab",
    description:
      "Researching large language models like XLS-R to build fine-tuned deepfake audio detection models.",
    image: tmi,
  },
  {
    title: "Software Developer @ UTESCA",
    description:
      "Working in a team of 6 to build a stock-trading website for Finliti using the TradingViews API.",
    image: utesca,
  },
  {
    title: "Backend Software Developer @ UTCCA",
    description:
      "Working on WebViz, a web app supporting vehicle testing and data visualization.",
    image: utcca,
  },
  {
    title: "UTFR Driverless Mapping Team Member",
    description:
      "Contributing to WebViz development and mapping for autonomous vehicle testing.",
    image: utfr,
  },
  {
    title: "Programming Facilitator @ CodeSky",
    description:
      "Teaching Scratch and web development (HTML, CSS, JS) to elementary and high school students.",
    image: codesky,
  },
  {
    title: "Currently Seeking 2025 Summer Internships!",
    description:
      "Looking forward to applying and expanding my technical skills in a dynamic environment.",
    image: compIcon,
  },
];

export const Experiences = () => {
  return (
    <section className={styles.container} id="Experiences">
      <div className={styles.header}>
        <h2 className={styles.title}>Who am I?</h2>
        <a
          href={resumePDF}
          className={styles.resumeLink}
          target="_blank"
          rel="noreferrer"
        >
          📄 View Resume
        </a>
      </div>

      <div className={styles.experienceList}>
        {experienceData.map((item, index) => (
          <div key={index} className={styles.experienceItem}>
            <img src={item.image} alt={item.title} className={styles.image} />
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
