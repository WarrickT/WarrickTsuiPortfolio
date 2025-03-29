import React from "react";
import gasChecker from "../../assets/projects/GasChecker.png";
import ReliefGrid from "../../assets/projects/ReliefGrid.png";
import reversi from "../../assets/projects/Reversi.png";
import tetrisScreen from "../../assets/projects/TetrisScreen.png";

import styles from "./ProjectCard.module.css";

let projects_dictionary = {
    "Gas Price Checker - Web Scraping Project": gasChecker,
    "Tetris FPGA Verilog Project": tetrisScreen, 
    "ReliefGrid - NewHacks Hackathon Project": ReliefGrid,
    "Reversi Project - C": reversi
}


export const ProjectCard = ({
    project: {title, imageSrc, description, github}}) => {
    return(
        <div className = {styles.container}>
            <img src = {projects_dictionary[title]} 
            alt = {`Image of ${title}`}
            className = {styles.image}
            >
            </img>

            <h3 className = {styles.title}>{title}</h3>
            <p className = {styles.description}>{description}</p>
            <div className = {styles.links}>
                <a href = {github} className = {styles.link}>Github</a>
                </div>
            </div>

    )
}