import { Navlinks } from '@/constant/constant';
import { X } from 'lucide-react';
import Link from "next/link"
import React from 'react'

type Props = {
    showNav:boolean;
    closeNav:()=>void;
}

const MobileNav = ({closeNav, showNav}:Props) => {
    const overlayClasses = showNav
        ? "opacity-70 pointer-events-auto"
        : "opacity-0 pointer-events-none"
    const panelClasses = showNav ? "translate-x-0" : "-translate-x-full"

  return (
    <div>
        {/* overlay */}
        <div
            onClick={closeNav}
            className={`fixed inset-0 transform transition-all duration-500 z-1002 bg-black ${overlayClasses} w-full h-screen`}
        ></div>
        {/* navlinks */}
        <div className={`text-white fixed ${panelClasses} justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[50%] bg-[#161617] space-y-6 z-1050 `}>
            {Navlinks.map((link, index) => {
                    return (
                    <Link 
                        key={index}
                        href={link.href}
                        className="text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]"
                    >
                        <p>{link.name}</p>
                    </Link>
                    );
            })}
            {/* close icon */}
            <X
            onClick={closeNav} 
            className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 w-6 h-6' />
        </div>
        

        
    

    </div>
  )
}

export default MobileNav