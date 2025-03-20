'use client';
import { nav, ul } from 'framer-motion/client'
import Link from 'next/link'
import { RiMenu3Fill } from "react-icons/ri";
import { MdOutlineCancel } from "react-icons/md";
import React, { useState } from 'react'
import Image from 'next/image'

import { CiMenuFries } from "react-icons/ci";
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import { motion, useMotionValue, useMotionValueEvent, useScroll } from 'framer-motion';

function Navbar() {
  let user = true;
  const [ isMenuOpen , setIsMenuOpen ] = useState(false) 
  const [ isScrolled, setIsScrolled ] = useState(false)
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50)
  } )
  const navItems = [
    {name:'Projects', link:'#projects'},
    {name:'Skills',link:'#skills'},
    {name:'About',link:'#about'},
    {name:'Contact',link:'#contact'},
  ]
  const Links = {
     Github:'',
     Linkedin:'',
     twitter:''

  }

  return (
    <>
    <motion.nav 
    initial={{y:-100}}
    animate={{y:0}}
    className={`bg-black/50 text-white flex p-5 justify-between backdrop-blur-xl -z-50 ${isScrolled ? `bg-background/90 bg-blur-2xl shadow`:``}`}>
               {/* Logo */}
        <div className=''>
            <Image 
            src='/logo.png'
            alt='logo'
            width={50}
            height={50}
            className='rounded-full'
            />
        </div>
        
      
      {/* Nav links for larger screens */}
<div className='hidden md:flex gap-4 mt-3 '>
  
    {navItems.map((items,index:number) => {
      return (
        <ul key={index} className=''>
        <Link href={items.link}><li className='duration-300 text-gray-400 hover:text-white'>{items.name}</li></Link>
        </ul>
      )
    })}

</div> 

        


        <div className='hidden md:flex'>
        <ul className='flex '>
                <Link href='https://github.com/Ahmedkhang'><li><FaGithub className='my-3 text-gray-400 mx-3 hover:text-white text-xl transition-colors'/></li></Link>
                <Link href='https://www.linkedin.com/in/ahmed-ur-rehman-b98121279/'><li><FaLinkedin className='text-gray-400 mx-3 text-xl my-3 hover:text-white transition-colors' /></li></Link>
                
            </ul>
        </div>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='md:hidden pr-2'>
          {isMenuOpen ? (
             <MdOutlineCancel className='text-2xl mt-2' />
          ) : (
           
            <RiMenu3Fill  className='text-xl mt-2'/>
          )}
        </button>

        

    </motion.nav>
    {isMenuOpen && (
      <div 
      className='bg-gray-900 h-auto p-10 text-white space-y-2'>
        {navItems.map((items,index:number) => {
          return(
            <motion.ul key={index} 
             animate={{
        x:80
      }}
            className=''>
              <Link href={items.link}><li className='duration-300 hover:text-gray-800 text-lg'>{items.name}</li></Link>
            </motion.ul>
            
          )
          
        })}
        <motion.div 
         animate={{
          x:80
        }}
        className='mt-3'>
        <ul className='flex  '>
                <Link href='https://github.com/Ahmedkhang'><li><FaGithub className='my-2 text-gray-400 mx-1 hover:text-white text-xl transition-colors'/></li></Link>
                <Link href='https://www.linkedin.com/in/ahmed-ur-rehman-b98121279/'><li><FaLinkedin className='text-gray-400 mx-3 text-xl my-2 hover:text-white transition-colors' /></li></Link>
                <Link href='#'><li><FaEnvelope className='text-gray-400 mx-3 text-xl my-2 hover:text-white transition-colors' /></li></Link>
            </ul>
        </motion.div>
      </div>
    )}
    
    </>
  )
}

export default Navbar