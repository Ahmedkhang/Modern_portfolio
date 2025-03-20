import { footer } from 'framer-motion/client'
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { EnvelopeIcon } from "@heroicons/react/16/solid";
import Link from 'next/link';


function Footer() {
  return (
    <footer className='text-white bg-gray-900 border-t border-gray-800'>
     <div className='max-w-7xl px-4 sm:px-6 lg:px-8 py-12 mx-auto'>
       <div className='grid grid-cols-1 mb-4 md:grid-cols-4 gap-8'>
         <div className=''>
            <h3 className='text-lg font-semibold mb-4'>About</h3>
            <p className='text-gray-400'>Building digital experiences that combine modern technology width
            exceptional design.</p>
         </div>

         <div className='text-gray-400'>
            <h3 className='mb-4 text-lg text-white font-semibold'>Links</h3>
            <ul className='space-y-2'>
                <Link href={'#projects'}><li className='hover:text-white transition-colors'>Projects</li></Link>
               <Link href={'#about'}><li className='hover:text-white transition-colors'>About</li></Link>
                <Link href={'#contact'}><li className='hover:text-white transition-colors'>Contact</li></Link>
                
            </ul>
         </div>

         <div>
            <h3 className='text-lg font-semibold mb-4'>Legal</h3>
            <ul className='space-y-3'>
                <li className='text-gray-400 hover:text-white transition-colors'>Privacy</li>
                <li className='text-gray-400 hover:text-white transition-colors'>Terms & Conditions</li>
            </ul>
         </div>

         <div>
            <h3 className='text-lg font-semibold mb-4'>Connect</h3>
            <ul className='space-y-3'>
                <Link href='https://github.com/Ahmedkhang'><FaGithub className='my-2 text-gray-400 mx-5 hover:text-white text-xl transition-colors'/></Link>
                <Link href='https://www.linkedin.com/in/ahmed-ur-rehman-b98121279/'><FaLinkedin className='text-gray-400 mx-5 text-xl my-2 hover:text-white transition-colors' /></Link>
                <Link href='#'><FaEnvelope className='text-gray-400 mx-5 text-xl my-2 hover:text-white transition-colors' /></Link>
            </ul>
         </div>

         <div className='border-t border-gray-800 mt-10 pt-8 text-center'>
          <p className='text-gray-400'>&copy;{new Date().getFullYear()} Ahmed Ur Rehman. All right reserved</p>
         </div>

       </div>
     </div>
    </footer>
  )
}

export default Footer