"use client";
import InterestCard from "../Interests/InterestCard";
import ParticlesHero from "./ParticleBackground";

const Hero = () => {
  return (
    <div className="relative h-auto flex items-center justify-center text-white flex-col mt-[15vh]">
        <ParticlesHero />
        
        {/*Terminal Container */}
        <div className="relative z-10 bg-[#0d0d0d] border-2 border-cyan-400 rounded-lg shadow-2xl 
    w-11/12 h-auto min-h-[70vh]  flex flex-col py-5 px-4 font-mono">

  {/* Top bar */}
  <div className="flex items-center space-x-2 mb-6">
    <span className="w-4 h-4 bg-red-500 rounded-full"></span>
    <span className="w-4 h-4 bg-yellow-500 rounded-full"></span>
    <span className="w-4 h-4 bg-green-500 rounded-full"></span>
    <span className="ml-4 text-xl text-cyan-400">warrick@uoft: ~$</span>
  </div>

  {/* Terminal body */}
  <div className=" text-gray-300 space-y-8">
    {/* greetings.txt */}
    <div>
      <h1 className="text-white text-xl">
        <span className="text-cyan-400">$ </span> <span className="text-yellow-200">cat </span>greetings.txt
      </h1>
      <p className="mt-2 text-lg md:text-lg">
        Hello! This is my Portfolio Website. Here I will outline all my{" "}
        <span className="text-cyan-300">interests, work experiences, and projects.</span>
        <br /><br />
        Furthermore, I will constantly update my{" "}
        <span className="text-green-400">Machine Learning Journal</span> and{" "}
        <span className="text-green-400">K8s blog</span>. I love recording my learnings
        as it keeps me motivated but can also serve as a useful resource to others. Feel free to venture through my blogs!
      </p>
    </div>

    {/* about.txt */}
      <h1 className="text-white text-xl">
        <span className="text-cyan-400">$ </span> <span className="text-yellow-200">cat </span>about.txt
      </h1>

    <div className="mt-4 flex flex-col md:flex-row items-start gap-6">
      <div className="flex-1 text-lg md:text-lg">
            I am a passionate and capable student studying Computer Engineering at University of Toronto. I am interested in all things <span className="text-cyan-400">machine learning </span>
             and <span className="text-cyan-400">software development (fullstack, frontend, backend)</span>. I enjoy building projects and working with teams that make a difference in our world. 
             <br/>
             <br/>
            If I am not working, you will see me trying out different coffees in Downtown Toronto while vibing to J-Pop --- though Second Cup is always my safe choice. I enjoy watching televised sports as well, mainly the 
            English Premier League and the NBA. I also enjoy going on walks around my beautiful neighbourhood of Cornell. 
            <br/>
            <br/>
      </div>
          <div className="flex-shrink-0">
      <img
        src="/images/Park.jpg"
        alt="About me"
        className="w-75 h-75 object-cover rounded-full shadow-lg ml-[5vh]"
      />
    </div>
    </div>

    <div className="mt-2 text-lg md:text-lg">


        </div>
{/* about.txt */}
    <div>
      <h1 className="text-white text-xl">
        <span className="text-cyan-400">$ </span> <span className="text-yellow-200">ls </span> skillset
      </h1>
              <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-10 mb-10 items-center">
            <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="0">
                <InterestCard icon="/images/s4.png" name="Machine Learning" description="Interested in all things Machine Learning! I have a blog documenting all ML concepts I have learned."/>
            </div>
            <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100">
                <InterestCard icon="/images/s1.png" name="Fullstack Development" description="3+ years of experience in Software Development."/>
            </div>
            <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="300">
                <InterestCard icon="/images/s2.png" name="MLOps/Infrastructure" description="Recently immersed myself into MLOps and Platform Infrastructure!"/>
            </div>
                  <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="400">
                <InterestCard icon="/images/s3.png" name="Digital Systems" description="Strong academic background in Digital System and low-level programming courses, with deep projects to show for it."/>
            </div>
        </div>

    </div>



  </div>
</div>




    </div>
    )
}

export default Hero