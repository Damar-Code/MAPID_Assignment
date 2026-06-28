import React from 'react'
import { socialLinks } from "@/data";
import { FaXTwitter, FaInstagram, FaLinkedin  } from 'react-icons/fa6'

const Footer = () => {
  return (
    <section className='bg-[#dedfe0] dark:bg-[#18212b]'>
        <div className='w-[70%] mx-auto sm:flex justify-between pt-7 pb-7'>
            <div>
                <p className='text-black dark:text-white text-sm mb-2'>&copy; 2026 Damar Panoto. All Rights Reserved</p>
                <p className='text-xs text-zinc-500'>Made with love and the bitter taste of Americano</p>
            </div>
            <div>
                <p className='text-black dark:text-white  text-sm mb-2 pt-3 sm:pt-0'>Reach Me</p>
                <p className='text-xs text-zinc-500'>+62 0721-3140-3393 WhatsApp/Telephone</p>
                <p className='text-xs text-zinc-500'>damarpanoto@gmail.com</p>
            </div>
            <div>
                <p className='text-black dark:text-white  text-sm mb-2 pt-3 sm:pt-0'>My Office</p>
                <p className='text-xs text-zinc-500'>Sahid Sudirman Centre</p>
                <p className='text-xs text-zinc-500'>Karet Tengsin, Tanah Abang</p>
                <p className='text-xs text-zinc-500'>Central Jakarta, Jakarta 10250</p>
                <p className='text-xs text-zinc-500'>Indonesia</p>
            </div>
            <div>
                <p className='text-black dark:text-white text-sm mb-2 pt-3 sm:pt-0'>Social Media</p>
                <div className='flex flex-row'>
                    <a 
                    href={socialLinks.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <FaXTwitter className='w-4 h-4 mr-2 text-zinc-800 dark:text-white hover:text-[#20AAFF] dark:hover:text-[#20AAFF]'/>
                    </a>
                    <a 
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <FaInstagram className='w-4 h-4 mr-2 text-zinc-800 dark:text-white hover:text-[#20AAFF] dark:hover:text-[#20AAFF]'/>
                    </a>
                    <a 
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <FaLinkedin className='w-4 h-4 mr-2 text-zinc-800 dark:text-white hover:text-[#20AAFF] dark:hover:text-[#20AAFF]'/>
                    </a>
                </div>
            </div>

        </div>

    </section>
  )
}

export default Footer
