import { CodeSquareIcon } from 'lucide-react'
import { BsFillGlobeAsiaAustraliaFill } from "react-icons/bs";
import React from 'react'

const Logo = () => {
  return (
    <div className='flex items-center space-x-2 pl-10 sm:pl-0'>
        <div className='bg-[#0071E3] w-10 h-10 rounded-lg flex items-center justify-center flex-col'>
            <BsFillGlobeAsiaAustraliaFill className='text-white w-6 h-6' />
        </div>
        {/* <h1 className='sm:text-xl hidden sm:block md:text-2xl text-[#0DBBFB] font-bold'>
            {"Geo"}
        </h1> */}
    </div>
  )
}

export default Logo