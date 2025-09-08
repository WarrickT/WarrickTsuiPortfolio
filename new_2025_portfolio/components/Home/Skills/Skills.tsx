"use client";
import { FaJava } from 'react-icons/fa';
import { SiC, SiCplusplus, SiCss3, SiDjango, SiDocker, SiFastapi, SiHtml5, SiJavascript, SiKubernetes, SiNextdotjs, SiPostgresql, SiPython, SiPytorch, SiReact, SiTypescript, SiUbuntu } from 'react-icons/si';
import Tilt from "react-parallax-tilt";

const languages = [ 
    {
        name: "Python", 
        icon: <SiPython/>
    }, 
    {   
        name: "Java", 
        icon: <FaJava/>
    },
    {
        name: "C++", 
        icon: <SiCplusplus/>
    }, 
    {
        name: "C", 
        icon: <SiC/>
    }, 
    {
        name: "JavaScript", 
        icon: <SiJavascript/>
    }, {
        name: "HTML", 
        icon: <SiHtml5/>
    }, {
        name: "CSS", 
        icon: <SiCss3/>
    }, 
    {
        name: "TypeScript", 
        icon: <SiTypescript/>
    }
]

const frameworks = [
    {
        name: "React", 
        icon: <SiReact/>
    }, 
        {
        name: "Next.js", 
        icon: <SiNextdotjs/>
    }, 
        {
        name: "PyTorch", 
        icon: <SiPytorch/>
    }, 
        {
        name: "Fast API", 
        icon: <SiFastapi/>
    }, 
        {
        name: "Django", 
        icon: <SiDjango/>
    }, 
        {
        name: "PostgreSQL", 
        icon: <SiPostgresql/>
    }, 
        {
        name: "Docker", 
        icon: <SiDocker/>
    }, 
        {
        name: "Kubernetes", 
        icon: <SiKubernetes/>
    }, 
    {
        name: "Ubuntu Operating Systems",
        icon: <SiUbuntu/>
    }
]



const Skills = () => {
  return (
    <div>
        {/* Mapping out all the skills */}


    <div className="relative h-auto flex items-center justify-center text-white flex-col mt-[10vh]">
    {/* </div>
    <div className = "pt-20 pb-16"> */}
        {/*Terminal Container */}
          <h1 className="text-center text-4xl text-cyan-400 mb-[3vh] ">
        Programming Skills
  </h1>
    {/* <div className="pt-16 pb-16">
        <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
            <span className="text-cyan-300">Projects</span> Portfolio
        </h1> */}


        <div className="relative z-10 bg-[#0d0d0d] border-2 border-cyan-400 rounded-lg shadow-2xl 
    w-11/12 h-auto min-h-[70vh]  flex flex-col py-5 px-4 font-mono">

  {/* Top bar */}
  <div className="flex items-center space-x-2 mb-6">
    <span className="w-4 h-4 bg-red-500 rounded-full"></span>
    <span className="w-4 h-4 bg-yellow-500 rounded-full"></span>
    <span className="w-4 h-4 bg-green-500 rounded-full"></span>
    <span className="ml-4 text-xl text-cyan-400">warrick@uoft: <span className="text-yellow-300">/skills&frameworks</span>$</span>
  </div>

<div className="flex flex-wrap justify-center gap-6 mt-16 pb-10">
{languages.map((language) => {
    return (
        <Tilt key={language.name} scale={1.5} transitionSpeed={400}>
            <div data-aos="flip-right" data-aos-anchor-placement="top-bottom" 
            className="bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col
            items-center justify-center shadow-lg transition hover:scale-105">
                <div className="text-5xl mb-4 text-gray-300">{language.icon}</div>
                <p className="text-cyan-400 mt-1">{language.name}</p> 
                </div>
        </Tilt>
    );
})
}

</div>

<div className="flex flex-wrap justify-center gap-6 mt-16 pb-10">
{frameworks.map((framework, i) => {
    return (
        <Tilt key={framework.name} scale={1.5} transitionSpeed={400}>
            <div data-aos="flip-right" data-aos-anchor-placement="top-bottom"
            className="bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col
            items-center justify-center shadow-lg transition hover:scale-105">
                <div className="text-5xl mb-4 text-gray-300">{framework.icon}</div>
                <p className="text-cyan-400 mt-1">{framework.name}</p> 
                </div>
        </Tilt>
    );
})

}
</div>
  </div>
  </div>

        

    </div>
  )
}
export default Skills