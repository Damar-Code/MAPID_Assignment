import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className='py-16 bg-white dark:bg-transparent'>
        <div className='text-3xl text-center mb-8 font-bold text-[#20aaff] dark:text-yellow-500'>
            Contact
            <span className='text-3xl text-center mb-8 font-bold text-black dark:text-white'>{' '}Me</span>
        </div>
        
        <div data-aos='zoom-in' data-aos-delay='300' className='w-[60%] mx-auto bg-[#F3F3F3] dark:bg-[#161617] border border-zinc-300 dark:border-zinc-700 rounded-2xl px-0 pt-1 shadow-xl/30'>
            {/* Create the Border */}
            <div>
                <div className='text-xs text-right pt-5 pb-2 pr-10 font-mono font-semibold tracking-widest text-zinc-500 uppercase'>
                    GET IN TOUCH
                </div>
                {/* Grid for Input Name and Email */}
                <div className='grid sm:grid-cols-2 sm:gap-6'>
                    {/* Your Name Input */}
                    <div className='pl-5 pr-5 sm:pb-5 sm:pt-3'>
                        <label className='text-xs font-medium text-[#0071E3] font-sans'>
                            Your Name
                        </label>
                        <input
                            type='text'
                            placeholder='Ronaldinho'
                            className='w-full bf-[#1c1c1e] text-black dark:text-white border border-zinc-700 rounded-xl px-4 py-3 text-sm placeholder-zinc- focus:outline-none focus:border-zinc-500 transition-colors'   
                        />
                        
                    </div>
                    {/* Your Emailame Input */}
                    <div className='pr-5 pl-5 sm:pb-5 sm:pt-3'>
                        <label className='text-xs font-medium text-[#0071E3] font-sans'>
                            Your Email
                        </label>
                        <input
                            type='text'
                            placeholder='Ronaldinho@gmail.com'
                            className='w-full bf-[#1c1c1e] text-black dark:text-white  border border-zinc-700  rounded-xl px-4 py-3 text-sm placeholder-zinc- focus:outline-none focus:border-zinc-500 transition-colors'   
                        />
                        
                    </div>
                </div>
                {/* Messagge */}
                <div className='space-y-2 p-5 pt-0'>
                    <label className='text-xs font-medium text-[#0071E3] font-sans'>
                        Message
                    </label>
                    <textarea
                        rows={7}
                        placeholder='Let me know what your project is about...'
                        className='w-full bf-[#1c1c1e] text-black dark:text-white  border border-zinc-700 rounded-xl px-4 py-3 text-sm placeholder-zinc- focus:outline-none focus:border-zinc-500 transition-colors'   
                    />
                </div>
                <div className="flex p-5 pt-0 justify-start">
                    {/* 2. Interactive Submit Button */}
                    <button 
                        type="submit"
                        className='text-xs box-border relative inline-flex items-center justify-center w-auto
                        px-8 py-3 overflow-hidden text-white transition-all duration-300 
                        bg-[#0071E3] hover:bg-[#20aaff] rounded-xl cursor-pointe gap-2'
                    >
                        
                        <span>Just Send{" "}</span>
                        
                        {/* Subtle arrow icon that shifts up/right when you hover (Matches the icon style in your photo!) */}
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={3} 
                            stroke="white" 
                            className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </button>

                </div>


            </div>
        
        </div>
    </section>
  )
}

export default Contact