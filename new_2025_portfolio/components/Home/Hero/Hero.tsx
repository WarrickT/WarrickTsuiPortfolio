"use client";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import ParticlesHero from "./ParticleBackground";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col">
        <ParticlesHero />
        
        <div className="relative z-10 flex flex-col items-center">
            <Image src="/images/Park.jpg" alt="heroimage" width={250} height={250} className="rounded-full border-8 
            border-[#0c0c48aa]" data-aos="fade-up"/>
            <h1 data-aos="fade-up" data-aos-delay="200" className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl
            mt-6 text-center font-bold tracking-wide">
                Hi! I am <span className="text-cyan-400">Warrick Tsui.</span>
            </h1>
            <h2 data-aos="fade-up" data-aos-delay="400" className="mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center">
                I am passionate about
                <span className="text-indigo-500 font-bold">
                    <Typewriter options={{
                        strings: [
                            'Machine Learning', 
                            'Software Infrastructure', 
                            'Fullstack Development', 
                            'LLM Research'
                        ], 
                        autoStart: true, 
                        loop: true,
                        delay: 75, 
                        deleteSpeed: 50, 
                        wrapperClassName: "pl-2", 
                    }}/>
                </span>
            </h2>
            <p data-aos="fade-up" data-aos-delay="500" className="mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center">
                <span className="text-cyan-400">Email: </span> warricktsui1226@gmail.com
            </p>

            <p data-aos="fade-up" data-aos-delay="600" className="mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center">
                <span className="text-cyan-400">Tele: </span> 647-619-9282
            </p>

            {/*See My Work Button */}
            {/* <button data-aos="fade-up" data-aos-delay="600" className="mt-6 px-10 py-4 bg-cyan-400 hover:bg-cyan-400 transition-all 
            duration-300 cursor-pointer rounded-full text-lg font-medium">
                <span>See my work</span>
                <BsArrowRight className="w-5 h-5 ml-2 inline-block"/>
            </button> */}
        </div>
    </div>
    )
}

export default Hero