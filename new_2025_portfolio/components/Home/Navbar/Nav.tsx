"use client";
{/*Every component is a server component by default. You cannot use hooks, so you have to convert it like this.*/}
import { default as Link } from 'next/link';
import { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { NavLinks } from "../../../constants/constants";




type Props = {
    openNav: () => void; //Function returning void
}

const Nav = ({openNav}: Props) => {

    // Change navigation bar background when user scrolls down 
    const [navBg, setNavBg] = useState(false); // State variable holding whether navigation bar should be visible

    useEffect(() => {
        const handler=()=>{
            if(window.scrollY >= 90) setNavBg(true);
            if(window.scrollY < 90) setNavBg(false);
        };

        window.addEventListener("scroll", handler);
        // Run handler function every time the user scrolls 

        // Cleanup 
        return () => window.removeEventListener("scroll", handler);
    }, [])

  return (
    <div className={`transition-all ${
        navBg ? "border-b-4 border-cyan-400 bg-[#0f142ed9] shadow-md " : "border-b-4 border-cyan-400 fixed"
        } duration-200 h-[12vh] z-[10000] fixed w-full`}>
        <div className="flex items-center h-full justify-between w-[90%] mx-auto">
            {/*LOGO*/}
            <div className="flex items-center space-x-2">
                {/* <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col">
                    <FaCode className="w-5 h-5 text-black"/>
                </div> */}
                <h1 className="text-xl hidden sm:block md:text-2xl text-cyan-400 font-b">warrick@uoft: ~$</h1>
            </div>

            {/*Navlinks */}
            <div className="hidden lg:flex items-center space-x-10">
                {NavLinks.map((link) => {
                    const isSection = link.url.startsWith("#");
                    // return <Link key={link.id} href={link.url} className="text-base hover:text-cyan-300 text-white font-medium transition-all duration-200"> 
                    //     <p>
                    //         {link.label}
                    //     </p>
                    // </Link>
            return isSection ? (
                <a
                    key={link.id}
                    href={link.url}
                    onClick={(e) => {
                    e.preventDefault();
                    const targetId = link.url.substring(1); // remove '#'
                    const el = document.getElementById(targetId);
                    if (el) {
                        el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                    }}
                    className="px-3 py-2 rounded-md border-2 md:border-3 border-cyan-400 text-base hover:text-cyan-300 text-white font-medium transition-all duration-200"
                >
                    {link.label}
                </a>
                ) : (
                <Link
                    key={link.id}
                    href={link.url}
                    className="text-base hover:text-cyan-300 text-white font-medium transition-all duration-200"
                >
                    {link.label}
                </Link>
                );

                })}
            </div>

            {/* Buttons*/}
            {/*Resume Downloader */}
            {/* <div className="fex items-center space-x-4">
                <button className="px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900 transition-all duration-300 text-white flex items-center space-x-2">
                    <BiDownload className="w-5 h-5"/>
                    <span>Download Resume</span>
                </button>
            </div> */}
            {/*Hide burger menu*/}
            <HiBars3BottomRight onClick={openNav} className="w-8 h-8 cursor-pointer text-white lg:hidden"/>
            
        </div>
    </div>

  )
}

export default Nav