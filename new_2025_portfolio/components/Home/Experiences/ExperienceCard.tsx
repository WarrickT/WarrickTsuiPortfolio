import Image from "next/image";

type Props = {
    role: string; 
    icon: string; 
    date?:string;
    description?:React.ReactNode;
    skills?:string[];
}

// Should put in the skills
const ExperienceCard = ({role, icon, date, description, skills}: Props) => {
  return (
    <div className="mb-6">
        <div className="border-3 border-cyan-400 rounded-md flex items-start space-x-6 bg-blue-950/20 hover:bg-blue-500/20 transition-all duration-300 p-4 sm:p-8
        rounded-md">
            <div className="sm:w-28 sm:h-28 w-20 h-20 bg-blue-950 rounded-full flex items-center justify-center
            flex-col">
                <Image src={icon} alt="img" width={200} height={200}/>
            </div>
            <div className="flex-1">
                {date && (
                    <h1 className="mb-2 sm:px-6 sm:py-1.5 px-4 py-1 rounded-full bg-gray-200
                    text-gray-900 w-fit sm:text-lg text-sm ">
                        {date}
                    </h1>
                )}
                <h1 className="text-cyan-300 text-xl sm:text-2xl ">
                    {role}
                </h1>
                {description && (
                    <p className="text-gray-300 text-md sm:text-lg pt-3">
                        {description}
                        </p>
                )}
            </div>
        </div>
    </div>
  )
}

export default ExperienceCard