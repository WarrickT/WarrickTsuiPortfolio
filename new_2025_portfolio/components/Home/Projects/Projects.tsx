import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <div className="pt-16 pb-16">
        <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
            <span className="text-cyan-300">Projects</span> Portfolio
        </h1>
        <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 xl:gap-6 gap-10">
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="0">
              <ProjectsCard image='/images/Projects/PotholeCover.png' title='Pothole Detection' 
              shortDescription='Deep Learning model for detecting road potholes using SSD Architecture, from scratch on PyTorch.'
              skills={["PyTorch", "Python", "Deep Learning"]}
              demoLink="https://www.youtube.com/watch?v=dlsJO9Yi0Jc"
              />
            </div>
            
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="100">
          <ProjectsCard image='/images/Projects/ASLCover.png' title='ASLVision' 
          shortDescription='Real-time American Sign Language (ASL) Recognition Web Application with custom-trained Random Forest Classifier'
          skills={["Numpy", "Python", "Scikitlearn", "Computer Vision", "OpenCV"]}
          demoLink="https://github.com/WarrickT/ASLvision"
          />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="200">
          <ProjectsCard image='/images/Projects/MLNotebookCover.jpg' 
          title='Machine Learning Notebook' 
          shortDescription='Documenting the classical ML algorithms, Deep Learning Architectures, and Reinforcement Learning I learned throughout the years!'
          skills={["Machine Learning", "Deep Learning", "PyTorch", "Python"]}
          githubLink="https://github.com/WarrickT/Machine_Learning_Notebook"
          />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="300">
          <ProjectsCard image='/images/Projects/DayTripPlanner.png' 
          title='Day Trip Planner - C++ Mapping Software' 
          shortDescription='Interactive GIS platform optimized for day trip planning purpsoes, built using C++ with EZGL Graphics library and implementing graph algorithsm'
          skills={["C++", "Web Scraping", "Graph Algorithms", "Python"]}
          />
        </div>        

        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="400">
          <ProjectsCard image='/images/Projects/SinkerCover.png'
           title='Sinker - Hack Canada Best Google AI Hack' 
           shortDescription='AI-powered cybersecurity simulation platform that aims to train employees in recognizing phishing messages, phone calls, and emails.  '
           skills={["TypeScript", "Express.js", "Next.js", "PostgreSQL", "Gemini API"]}
           demoLink="https://dorahacks.io/buidl/23048/"
           />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="500">
          <ProjectsCard image='/images/Projects/DeervolutionFinalDemo.png' 
          title='Deervolutions - Deerhacks 2nd Place Overall' 
          shortDescription='Pokemon-GO inspired mobile application that motivates students at UTM to explore their natural surroundings'
          skills={["TypeScript", "ReactJS", "Node.js", "Vite"]}
          githubLink="https://devpost.com/software/deervolution?_gl=1*1pkche5*_gcl_au*MTQ4Njk2MDYzMC4xNzUzNjMyNDEx*_ga*MTcwMjY4MDQyMy4xNzUzNjMyNDEx*_ga_0YHJK3Y10M*czE3NTcwMDM2ODQkbzYkZzAkdDE3NTcwMDM2ODQkajYwJGwwJGgw"
          />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="600">
          <ProjectsCard image='/images/Projects/ECE243Demo.png' 
          title='Bahen Battles - Video Game on FPGA' 
          shortDescription='Twist on classic Street Fighter game. Built entirely from C on an FPGA.'
          skills={["C", "FPGA", "Hardware I/O", "VGA"]}
          
          />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="700">
          <ProjectsCard image='/images/Projects/TetrisDemo.png' 
          title='Tetris - Video Game on FPGA' 
          shortDescription='Implementation of classic Tetris game on the FPGA using Verilog'
          skills={["Verilog", "FSM", "FPGA", "Hardware I/O"]}
          demoLink="https://github.com/WarrickT/Warrick-Daunte-Tetris"
          />
        </div>

        </div>
    </div>
  )
}

export default Projects