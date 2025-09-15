import { default as Link } from 'next/link';
import { CgClose } from "react-icons/cg";
import { NavLinks } from "../../../constants/constants";

type Props = {
    showNav: boolean; 
    closeNav: () => void; 
}

const MobileNav = ({closeNav, showNav}: Props) => {
    const navOpen = showNav ? "translate-x-0":"translate-x-[100%]";
    // This is slotted into the tailwind depending on if the variable is true/false
  return (
    <div>
        {/*Overlay*/}
        <div className={`fixed inset-0 ${navOpen} transform trans ition-all right-0 duration-500 z-[100002] 
        bg-black opacity-70 w-full h-screen`}>
    </div>
        {/*navlinks*/}
    <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform 
    transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-cyan-800 space-y-6 z-[100050] right-0`}>
            {NavLinks.map((link) => {



                return <Link key={link.id} href={link.url}>
                    <p className="text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-w sm:text-[30px">
                        {link.label}
                    </p>
                </Link>
            })}
        <CgClose onClick={closeNav} className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6"/>

        </div>
        </div>
  )
}

export default MobileNav