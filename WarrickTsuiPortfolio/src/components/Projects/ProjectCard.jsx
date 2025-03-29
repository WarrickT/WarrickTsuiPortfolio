import { motion } from "framer-motion";
import React from "react";
import styles from "./ProjectCard.module.css";

// Project image assets
import betterWeb from "../../assets/projects/BetterWeb.png";
import deervolutions from "../../assets/projects/Deervolutions.png";
import gasChecker from "../../assets/projects/GasChecker.png";
import ReliefGrid from "../../assets/projects/ReliefGrid.png";
import reversi from "../../assets/projects/Reversi.png";
import sinker from "../../assets/projects/Sinker.png";
import tetrisScreen from "../../assets/projects/TetrisScreen.png";

// Map project title to local image
const imageMap = {
  "Sinker - Hack Canada Best Google AI Hack": sinker,
  "Deervolution - Deerhacks 2nd Place Overall": deervolutions,
  "Gas Price Checker - Web Scraping Project": gasChecker,
  "Tetris FPGA Verilog Project": tetrisScreen,
  "ReliefGrid - NewHacks Hackathon Project": ReliefGrid,
  "Reversi Project - C": reversi,
  "BetterWeb - GenAI Genesis Project": betterWeb,
};

export const ProjectCard = ({ project, variant }) => {
  const { title, description, github } = project;

  // Conditionally style Sinker title
  let renderedTitle;
  if ((title === "Sinker - Hack Canada Best Google AI Hack") || (title === "Deervolution - Deerhacks 2nd Place Overall")) {
    const [main, highlight] = title.split(" - ");
    renderedTitle = (
      <h3 className={styles.title}>
        {main} - <span className={styles.lightBlue}>{highlight}</span>
      </h3>
    );
  } else {
    renderedTitle = <h3 className={styles.title}>{title}</h3>;
  }

  return (
    <motion.div
      className={`${styles.card} ${styles[variant]}`}
      layout
      transition={{ layout: { duration: 0.5, ease: "easeInOut" } }}
    >
      <img
        src={imageMap[title]}
        alt={`Preview of ${title}`}
        className={styles.image}
      />
      {renderedTitle}
      <p className={styles.description}>{description}</p>
      <div className={styles.links}>
        <a
          href={github}
          className={styles.link}
          target="_blank"
          rel="noreferrer"
        >
          GitHub/Devpost
        </a>
      </div>
    </motion.div>
  );
};
