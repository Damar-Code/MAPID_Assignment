"use client"
import Logo from '@/components/Helper/Logo'
import { Navlinks } from '@/constant/constant'
import Link from "next/link"
import React, { useEffect, useState } from 'react'
import { Download, MenuIcon } from "lucide-react";
import ThemeToggler from '@/components/Helper/ThemeToggler'
import { socialLinks } from "@/data";

type Props = {
    openNav:()=> void;
}

const Nav = ({openNav}:Props) => {
    const [navBg, setNavBg]=useState(false);
    useEffect(() => {
        const handler=()=>{
            if(window.scrollY >= 90) setNavBg(true)
            if(window.scrollY < 90) setNavBg(false)
        }
        
        window.addEventListener("scroll", handler)

        return () => window.removeEventListener("scroll", handler)

    }, [])

  return (
    <div className={`transition-all ${navBg ? "dark:bg-translate-y-full opacity-0 shadow-md" : "fixed"} duration-200 h-[12vh] z-100 fixed w-full`}>
        <div className='flex items-center h-full justify-between xl:w-[75%] mx-auto'>
            {/* LOGO */}
            <Logo/>
            {/* Navlinks */}
            <div className='hidden lg:flex items-center space-x-10 mr-auto ml-10'>
                {Navlinks.map((link, index) => {
                    return (
                    <Link 
                        key={index}
                        href={link.href}
                        className="dark:text-white text-xs text-black hover:text-[#20aaff] dark:hover:text-[#20aaff] font-semibold transition-all"
                    >
                        <p>{link.name}</p>
                    </Link>
                    );
            })}
            </div>
            {/* Buttons */}
            <div className='flex items-center space-x-6 '>
                {/* CV Buttons */}
                <a 
                href={socialLinks.cv}
                target="_blank"
                rel="noopener noreferrer"
                className='box-border relative z-20 inline-flex items-center justify-center w-auto px-6 
                sm:px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 
                bg-[#0071E3] hover:bg-[#20aaff] rounded-md cursor-pointer'
                >
                
                    <span className='relative z-20 flex items-center space-x-2 text-xs'>
                        <Download className="w-4 h-4"/>
                        <span>Download CV</span>
                    </span>

                </a>
                {/* Theme Toggler*/}
                <ThemeToggler />
                {/* Burger Menu*/}
                <MenuIcon onClick={openNav}
                className='w-7 h-8 cursor-pointer text-black dark:text-white lg:hidden' />

            </div>

        </div>
    </div>
  )
}

export default Nav