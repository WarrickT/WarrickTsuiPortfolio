import React from "react";
import styles from "./About.module.css";

export const About = () => {
    return (
        <section className={styles.container} id="About">
            <div className={styles.content}>
                <h1 className={styles.title}>
                    {"Hi, Warrick here!".split("").map((char, index) => (
                        char === " " ? (
                            <span key={index} className={styles.space}></span>
                        ) : (
                            <span
                                key={index}
                                className={styles.letter}
                                style={{ '--letter-index': index }} // Pass index as custom property
                            >
                                {char}
                            </span>
                        )
                    ))}
                </h1>
            </div>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};
