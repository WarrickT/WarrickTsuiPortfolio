// Add social media handles here 
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
const Footer = () => {
  return (
    <div className="bg-blue-900/20 p-5">
        <h1 className="text-lg text-white/70 text-center ">
            <span className="text-cyan-400">Warrick Tsui - </span> Contact me here!
        </h1>
        <div className="flex items-center justify-center mt-8 space-x-3">
            <a
                href="https://github.com/WarrickT"
                target="_blank"
                rel="noopener noreferrer"
            >
            <div className="w-28 h-28 bg-cyan-200 rounded-full flex items-center justify-center cursor-pointer 
            flex-col hover:bg-cyan-400 transition-all duration-300">
                <FaGithub className="text-4xl"/>
            </div>
            </a>

            <a
                href="https://www.linkedin.com/in/warrick-tsui-1a83772a3/"
                target="_blank"
                rel="noopener noreferrer"
            >
            <div className="w-28 h-28 bg-cyan-200 rounded-full flex items-center justify-center cursor-pointer 
            flex-col hover:bg-cyan-400 transition-all duration-300">
                <FaLinkedin className="text-4xl"/>
            </div>
            </a>

            <a
                href="https://www.instagram.com/warrickcwtsui/"
                target="_blank"
                rel="noopener noreferrer"
            >
            <div className="w-28 h-28 bg-cyan-200 rounded-full flex items-center justify-center cursor-pointer 
            flex-col hover:bg-cyan-400 transition-all duration-300">
                <FaInstagram className="text-4xl"/>
            </div></a>
        </div>
    </div>
  )
}

export default Footer