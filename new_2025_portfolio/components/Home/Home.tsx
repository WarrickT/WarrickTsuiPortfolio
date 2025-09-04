"use client";
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";
import Experiences from "./Experiences/Experiences";
import Hero from "./Hero/Hero";
import Interests from "./Interests/Interests";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";

const Home = () => {
    useEffect(()=>{
      const initAOS = async () => {
        await import('aos');
        AOS.init({
          duration: 1000, 
          easing: 'ease',
          once: true, 
          anchorPlacement: "top-bottom",
        });
      };
      initAOS();
    }, []);


  return (
    <div className="overflow-hidden">
      <section id="hero" className="scroll-mt-[12vh]">
        <Hero/>
      </section>
      <section id="interests" className="scroll-mt-[12vh]">
        <Interests/>
      </section>
      <section id="experiences" className="scroll-mt-[12vh]">
        <Experiences/>
      </section>
      <section id="projects" className="scroll-mt-[12vh]">
        <Projects/>
      </section>
      <section id="skills" className="scroll-mt-[12vh]">
        <Skills/>
      </section>
        {/* <BuildPC/> */}
    </div>
  )
}  

export default Home