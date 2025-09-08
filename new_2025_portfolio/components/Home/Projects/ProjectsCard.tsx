import Image from "next/image";
type Props = {
    title: string; 
    shortDescription: string; 
    image: string; 
    longDescription?: string; 
    skills?: string[];
    githubLink?:string;
    demoLink?: string;
}

// Need to size all the images the same! 
const ProjectsCard = ({title, shortDescription, image, longDescription, skills, githubLink, demoLink}: Props) => {
  return (
    <div className="border-3 border-cyan-400 rounded-md p-4
        rounded-md">
        <Image src={image} alt="img" width={600} height={400} className="rounded-lg"/>
        <h1 className="mt-4 text-xl sm:text-2xl text-white">
            {title}
        </h1> 
        <h1 className="pt-2 font-medium text-white/80">{shortDescription}</h1>

        <div className="mt-4 flex flex-wrap gap-2">
            {skills && (
                skills.map((skill) => {
                    return (
                    <div key={skill} className="mt-4 flex gap-3 items-center">
                        <p className="px-4 py-1.5 bg-blue-950 text-cyan-400 text-sm sm:text-base rounded-lg">
                            {skill}
                        </p>
                    </div>
                    )
                })
            )}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
        {
            demoLink && (

        <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
        >
        <button className="mt-6 px-10 py-2 bg-cyan-400 hover:bg-cyan-400 transition-all 
            duration-300 cursor-pointer rounded-full text-lg font-base">
                <span>Demo</span>
        </button> 
        </a>
               
            )
        }

        {
            githubLink && (
        <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
        > <button className="mt-6 px-10 py-2 bg-cyan-400 hover:bg-cyan-400 transition-all 
            duration-300 cursor-pointer rounded-full text-lg font-base">
                <span>Source Code</span>
        </button>
        </a>
            )
        }


        </div>
    </div>  )
}

export default ProjectsCard