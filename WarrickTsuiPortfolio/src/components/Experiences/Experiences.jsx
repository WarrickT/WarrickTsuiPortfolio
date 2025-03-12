import React from "react";
import styles from "./Experiences.module.css";

export const Experiences = () => {
    return(
        <section className = {styles.container} id = "Experiences">
            <h2 className = {styles.title}>Who am I?</h2>
            <div className = {styles.content}>
                <ul className = {styles.experienceItems}>
                    <li className = {styles.experienceItem}>
                        <div>
                            <h3>
                                University of Toronto Student!
                            </h3>
                            <p>
                                I am an ambitous and creative student currently pursuing a Bachelor's Degree in Computer Engineering. I am planning to pursue Areas 5 and 6 of the ECE Stream. 
                            </p>
                        </div>
                    </li>

                    <li  className = {styles.experienceItem}>
                        <div>
                            <h3>
                                UTFR Driverless Mapping Team Member
                            </h3>
                            <p>
                                I am currently working on their WebViz project, a web application that helps with vehicle testing. 
                            </p>
                        </div>
                    </li>

                    <li  className = {styles.experienceItem}>
                        <div>
                            <h3>
                                Programming Classroom Facilitator @ CodeSky
                            </h3>
                            <p>
                                I currently assist with teaching a Scratch class and web development (HTML, CSS, JS) class to elementary and high school students.
                            </p>
                    
                        </div>
                    </li>

                    <li  className = {styles.experienceItem}>
                        <div>
                            <h3>
                                Currently seeking 2025 Summer Internships!
                            </h3>
                            <p>
                                I look forward to further applying and enhancing my technical skills this upcoming summer.
                            </p>
                    
                        </div>
                    </li>

                </ul>
            </div>

        </section>
    )
}