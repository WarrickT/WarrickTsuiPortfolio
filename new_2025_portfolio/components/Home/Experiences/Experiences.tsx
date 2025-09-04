import ExperienceCard from "./ExperienceCard"


const Experiences = () => {
  return (
    <div className = "pt-20 pb-16">
        <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-1 gap-10">
            
            {/*Work Experiences*/}
            <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white">
                    My <span className="text-cyan-300">Experiences</span>
                </h1>
                <div className="mt-10" data-aos="zoom-in" data-aos-anchor-placement="top-center">
                    <ExperienceCard icon= "/images/UTMISTLogo.png" 
                    role="Academics Program Director" 
                    description="- Leading and Organizing the ML Fundamentals Program: a beginner-friendly, 
                    year-long workshop series for AI/ML Fundamentals"
                    date="July 2025 - Present"
                    />

                    <ExperienceCard icon= "/images/IEEELogo.png" 
                    role="Webmaster Associate" 
                    description={
                        <div>
                            <p>- Maintained and updated frontend of official website of IEEE using JavaScript, HTML, and CSS </p>
                            <br/>
                            <p>- Improving hackathon websites frontend using React and backend using Django and PostGreSQL to improve review
and application process of 1000+ competition participants</p>
                        </div>
                    }                    
                    date="June 2025 - Present" />

                    <ExperienceCard icon= "/images/ECEUofT.png" 
                    role="Software Development Research Intern"
                    date="April 2025 - Present"
                    description={
                        <div>
                            <p>- Helped develop an AI teaching assistant used by 1000+ students and 7+ engineering courses through building a RAG Pipeline in Python/FastAPI                            </p>
                            <br/>
                            <p>- Led application's full migration to Ubuntu production servers, configuring Shibboleth and Apache2 reverse proxy for secure Single Sign-On (SSO) with university infrastructure</p>
                            <br/>
                            <p>- Designed and implemented CI/CD pipeline for deploy and preview environments through creaeting structure Github Actions automation workflows</p>
                        </div>
                    } 
                    />
  
                    

                    <ExperienceCard icon= "/images/PhilerAI.jpeg" role="ML Developer" 
                    date="May 2025 - August 2025"
                    description={
                        <>
                            <p>- Helped develop a client-facing intake chatbot acting as domain-specific real estate expert and deploy a fine-tuned OCR (Optical Character Recognition) model on GCP for crucial document parsing</p>
                            <p> <br/></p>
                            <p>- Implemented multi-agent RAG system using LangGraph to optimize LLM workflows, enabling automatic extraction and population of real estate form information</p>
                        </>
                    }
                    />

                    {/* <ExperienceCard icon= "/images/UTESCA.png" role="Software Developer" 
                    date="Jan 2025 - April 2025"/> */}

                    <ExperienceCard icon= "/images/CodeSky.png" role="Programming Classroom Instructor" 
                    date="June 2024 - May 2025"
                    description={
                        <>
                            <p>- Organized and executed 2 weekly 90-minute lectures on Scratch and JavaScript/CSS/HTML/C++</p>
                            <p><br/></p>
                            <p>- Propelled coding class sizes to grow by 120% from June 2024 to September 2024</p>
                            <p><br/></p>
                        </>
                    }      
                    
                    />

                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Experiences