import InterestCard from "./InterestCard"
const Interests = () => {
  return (
    <div className="pt-16 pb-16">
        <h1 data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="0" className="text-center text-4xl md:text-6xl xl:text-5xl font-bold text-cyan-400">
            About Me! <br/>
        </h1>

        <div className="flex flex-col md:flex-row items-center md:items-center gap-10 w-[90%] mx-auto mt-10">
        <p data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="100"
         className="pl-4 pr-4 flex-1 w-5/8 md:w-1/2 text-center md:text-left text-base md:text-xl xl:text-2xl text-white">
            I am a passionate and capable student studying Computer Engineering at University of Toronto. I am interested in all things <span className="text-cyan-400">machine learning </span>
             and <span className="text-cyan-400">software development (fullstack, frontend, backend)</span>. I enjoy building projects and working with teams that make a difference in our world. 
             <br/>
             <br/>
            If I am not working, you will see me trying out different coffees in Downtown Toronto while vibing to J-Pop --- though Second Cup is always my safe choice. I enjoy watching televised sports as well, mainly the 
            English Premier League and the NBA. I also enjoy going on walks around my beautiful neighbourhood of Cornell. 
            <br/>
            <br/>

        </p>
        <img data-aos="fade-left"
                src="/images/Japan.jpg"
                alt="About Me"
            className="pl-4 pr-4 w-[250px] md:w-[350px] xl:w-[400px] rounded-2xl shadow-lg"/>

        </div>




        <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center">
            <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="0">
                <InterestCard icon="/images/s4.png" name="Machine Learning" description="Interested in all things Machine Learning! I have a blog documenting all ML concepts I have learned."/>
            </div>
            <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100">
                <InterestCard icon="/images/s1.png" name="Software Development" description="3+ years of experience in Software Development."/>
            </div>
            <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200">
                <InterestCard icon="/images/s3.png" name="LLM Research" description="Actively performing LLM Research!"/>
            </div>
            <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="300">
                <InterestCard icon="/images/s2.png" name="MLOps/Infrastructure" description="Recently immersed myself into MLOps and Platform Infrastructure!"/>
            </div>
        </div>
    </div>
  )
}

export default Interests