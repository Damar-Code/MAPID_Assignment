"use client";
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { Button } from '@/components/ui/button';
import { Download, FolderOpen, GraduationCap } from 'lucide-react';
import { FaGithub, FaLinkedin} from 'react-icons/fa6'
import { FaResearchgate } from "react-icons/fa";
import { SiResearchgate } from "react-icons/si";
import { socialLinks } from "@/data";
import Image from 'next/image'

// dark:bg-[#151515]

const Hero = () => {
  return (
    <section id='home' className="relative isolate min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-white dark:bg-transparent"/>
        <div className="relative z-10 flex min-h-screen items-center w-[73%] mx-auto">
          {/* content */}
          <div className="text-left flex flex-col items-start max-w-3xl">
            {/* Available for opportunities — Apple Glass Variant */}
            <div data-aos='fade-up' className="pb-5 sm:mb-6">
              <div className="inline-flex items-center gap-4 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md px-4 py-2 shadow-2xl">
                
                {/* Apple Three Dots (Mac Window Controls) */}
                <div className="flex items-center gap-1.5 pr-3 border-r border-zinc-300 dark:border-zinc-700">
                  <span className="h-2 w-2 rounded-full bg-[#FF5F56]"></span>
                  <span className="h-2 w-2 rounded-full bg-[#FFBD2E]"></span>
                  <span className="h-2 w-2 rounded-full bg-[#27C93F]"></span>
                </div>

                {/* Status Content */}
                <div className="flex items-center gap-2">
                  {/* Pulse indicator to show you are actively available */}
                  {/* <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span> */}
                  <span className="text-xs font-medium text-zinc-800 dark:text-zinc-200 tracking-wide font-sans">
                    Available for opportunities
                  </span>
                </div>

              </div>
            </div>
            {/* title */}
            <h1 
            data-aos='fade-up' 
            data-aos-delay='100' 
            className='text-black dark:text-white text-xl sm:text-2xl md-text-3xl lg:text-4xl font-bold mb-6'>
              Hi, I&apos;m{""} <span className='text-[#20aaff] dark:text-yellow-500'>Damar Panoto</span> 
            </h1>
            {/* typewrite effects */}
            <div 
            data-aos='fade-up' 
            data-aos-delay='200' 
            className='text-sm sm:text-md md:text-xl text-black dark:text-white font-semibold mb-4 sm:mb-8 h-5'>
              <TypeAnimation
              sequence={[
                  "Geospatial Datascientist",
                  2000,
                  "WebGIS Developer",
                  2000,
                  "Researcher",
                  2000
              ]}

              wrapper='span'
              speed={50}
              repeat={Infinity}
              className='font-mono'
              />

            </div>
            {/* Description */}
            <div className="max-w-4xl space-y-3 ">
              <p 
              data-aos='fade-up' 
              data-aos-delay='300' 
              className="text-sm sm:text-md text-gray-600 dark:text-gray-300 leading-8">
                Specialized in applying Geospatial Artificial Intelligence (Geo-AI) and managing large-scale enterprise datasets to drive digital transformation, 
                cost-saving, and data-driven decision-making. Actively involved in Disaster Risk Reduction & Education Research since 2019.
              </p>
            </div>
            {/* Button */}
            <div 
              data-aos='fade-up' 
              data-aos-delay='400' 
              className='justify-center sm:gap-5 mt-10 md:mt-10 sm:flex-row'>
              <Button size={"sm"} asChild className='w-fit mx-auto sm:mx-0 hover:bg-[#20aaff] hover:text-white transition-colors'>
                  <a 
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                   className='text-[11px]'
                  >
                      <FaGithub className='w-5 h-5 mr-2'/>
                      GitHub
                  </a>
              </Button>
              <Button size={"sm"} asChild className='w-fit mx-auto hover:bg-[#20aaff] hover:text-white transition-colors'>
                  <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='text-[11px]'
                  >
                      <FaLinkedin className='w-5 h-5 mr-2'/>
                      LinkedIn
                  </a>
              </Button>
              <Button size={"sm"} asChild className='w-fit mx-auto hover:bg-[#20aaff] hover:text-white transition-colors'>
                  <a
                  href={socialLinks.researchgate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='text-[11px]'
                  >
                      <SiResearchgate className='w-3 h-3'/>
                      ResearchGate
                  </a>
              </Button>
            </div>  
          </div>
          {/* <span className='pl-10 '>
              <Image 
              src={"/globe-showing-asia-australia-svgrepo-com.svg"}
              alt="Hero Image" 
              width={500} 
              height={100}
            />
          </span> */}
      </div>
    </section>
  )
}

export default Hero
