import { motion } from "framer-motion";
import React, { useState } from "react";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import styles from "./Projects.module.css";

export const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = projects.length;

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const leftIndex = (activeIndex - 1 + total) % total;
  const rightIndex = (activeIndex + 1) % total;

  return (
    <section className={styles.container} id="Projects">
      <h2 className={styles.title}>Projects </h2>

      <div className={styles.carouselWrapper}>
        <button className={styles.arrow} onClick={prev}>◀</button>

        <motion.div
          className={styles.carousel}
          layout
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <ProjectCard project={projects[leftIndex]} variant="side" key={leftIndex} />
          <ProjectCard project={projects[activeIndex]} variant="center" key={activeIndex} />
          <ProjectCard project={projects[rightIndex]} variant="side" key={rightIndex} />
        </motion.div>

        <button className={styles.arrow} onClick={next}>▶</button>
      </div>
    </section>
  );
};
