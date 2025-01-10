import React from "react";
import { getImageUrl } from "../../../utils";
import styles from "./About.module.css";

export const About = () => {
    return (
        <section className = {styles.container}>
            <div className = {styles.content}>
                <h1>Hi, Warrick here!</h1>
                <p>
                    Welcome to my portfolio website!
                </p>
                <a href = "warricktsui1226@gmail.com">Contact Email</a>
            </div>
            <img 
                src = {getImageUrl("about/Graduation.png")}
                alt = "Graduation Image"
            />
        </section>)
}

