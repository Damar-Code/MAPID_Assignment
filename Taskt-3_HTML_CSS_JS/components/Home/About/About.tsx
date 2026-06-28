import SectionHeading from '@/components/Helper/SectionHeading'
import { education, highlights, workExperiences } from '@/data'
import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <section id="about" className='py-16 bg-[#fafafa] dark:bg-transparent'>
            <div className='text-black dark:text-white text-3xl font-bold mb-4 text-center'>
                    About 
                <span className='text-3xl font-bold mb-4 text-cente text-[#20aaff] dark:text-yellow-500'>{' '}Me</span>
            </div>
            <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2'>
                
                {/* Left Column */}
                <div className="text-[#E0E0E0] font-sans antialiased w-full space-y-8 pl-5">
                    
                    {/* Profile Image */}
                    <div className="relative h-24 w-24 overflow-hidden rounded-full border border-zinc-800 shadow-lg">
                        <Image
                            src={"/images/profile.jpg"}
                            alt="Your Name"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* BIO SECTIONS WRAPPER: Changed from max-w-2xl to max-w-lg */}
                    {/* This makes the text box narrower, pulling the map inward toward the center! */}
                    <div className="space-y-6 text-sm leading-relaxed text-gray-600 dark:text-gray-300 font-normal max-w-lg">
                        <p>
                            I thrive on breaking down organizational bottlenecks and building scalable solutions.
                        </p>
                    </div>

                    {/* Experience Section: Also updated to max-w-lg to match the alignment perfectly */}
                    <div className='max-w-lg'>
                        <h2 className='text-xl font-semibold text-black dark:text-white'>
                            Experiences
                        </h2>
                        <div className="divide-y divide-zinc-600/40">
                            {workExperiences.map((exp, index) => (
                                <div key={index} className='flex justify-between items-start py-4'>
                                    <div>
                                        <h3 className= 'text-md font-extralight text-black dark:text-white'>{exp.company}</h3>
                                        <p className='text-xs text-zinc-500 mt-0.3'>{exp.title}</p>
                                    </div>
                                    <span className='text-xs text-black dark:text-zinc-300 font-mono whitespace-nowrap ml-4'>
                                        {exp.period}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Experience Section: Also updated to max-w-lg to match the alignment perfectly */}
                    <div className='max-w-lg'>
                        <h2 className='text-xl font-semibold text-black dark:text-white'>
                            Education
                        </h2>
                        <div className="divide-y divide-zinc-600/40">
                            {education.map((exp, index) => (
                                <div key={index} className='flex justify-between items-start py-4'>
                                    <div>
                                        <h3 className= 'text-md font-extralight text-black dark:text-white'>{exp.company}</h3>
                                        <p className='text-xs text-zinc-500 mt-0.3'>{exp.title}</p>
                                    </div>
                                    <span className='text-xs text-black dark:text-zinc-300 font-mono whitespace-nowrap ml-4'>
                                        {exp.period}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Right Column */}
                <div data-aos='fade-left' data-aos-delay='300' className="mt-[20%] max-w-lg w-full space-y-3">
                    <div className="bg-[#F3F3F3] dark:bg-[#161617] border border-zinc-300 dark:border-zinc-700 rounded-2xl px-0 pt-1 shadow-xl/30">
                        {/* Header Top Row */}
                        <div className="flex items-center justify-between px-5 py-3">
                            {/* 3 Apple Window Action Controls (Left Side) */}
                            <div className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-[#FF5F56] border border-[#E0443E]/40" />
                                <span className="w-2 h-2 rounded-full bg-[#FFBD2E] border border-[#DEA123]/40" />
                                <span className="w-2 h-2 rounded-full bg-[#27C93F] border border-[#1A9C2B]/40" />
                            </div>
                            {/* Header Label (Right Side - Matches WORKSPACE PREVIEW placement from image_cf4d40.png) */}
                            <span className="text-xs font-mono font-semibold tracking-widest text-zinc-500 uppercase">
                                My Location
                            </span>
                        </div>

                        {/* Map Container aspect-video */}
                        <div className="aspect-3/2 overflow-hidden border border-zinc-800 shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.2415174154!2d106.74711728373327!3d-6.229389599298288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e845e2d775%3A0x6d6ef3660d36cb!2sJakarta%2C%20Special%20Capital%20Region%20of%20Jakarta!5e0!3m2!1sen!2sid!4v1710000000000!5m2!1sen!2sid"
                                className="w-full h-full border-0 grayscale filter-[invert(90%)_hue-rotate(180deg)] opacity-85"
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                        <div className='text-xs text-zinc-400 p-3 px-5'>
                            Jakarta, Indonesia
                        </div> 
                    </div>
                </div>
                
            </div>
        </section>
        
    )
}

export default About


