import React from "react";
import graduationPic from "../../assets/about/Graduation.png";
import styles from "./About.module.css";


export const About = () => {
    return (
        <section className = {styles.container}>
            <div className = {styles.content}>
                <h1 className = {styles.title}>Hi, Warrick here!</h1>
            </div>
            <img className = {styles.gradImg} src = {graduationPic} alt = "Graduation Image"/>

            <div className = {styles.topBlur}/>
            <div className = {styles.bottomBlur}/>

        </section>)
}


