import React from "react";
import styles from "./Skills.module.css";

import c from "../../assets/skills/C.png";
import cpp from "../../assets/skills/cpp.png";
import css from "../../assets/skills/css-3.png";
import github from "../../assets/skills/github.png";
import html from "../../assets/skills/html.png";
import java from "../../assets/skills/java.png";
import js from "../../assets/skills/js.png";
import python from "../../assets/skills/python.png";
import react from "../../assets/skills/React.png";
import skills from "../../data/skills.json";

const skills_dictionary = {
  Python: python,
  Java: java,
  C: c,
  Cpp: cpp,
  HTML: html,
  CSS: css,
  JS: js,
  React: react,
  Github: github,
};

export const Skills = () => {
  return (
    <section className={styles.container} id="Skills">
      <h2 className={styles.title}>My Skills</h2>

      <div className={styles.skills}>
        {skills.map((skill, id) => (
          <div key={id} className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img
                src={skills_dictionary[skill.title]}
                alt={skill.title}
                className={styles.icon}
              />
            </div>
            <p className={styles.label}>{skill.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
