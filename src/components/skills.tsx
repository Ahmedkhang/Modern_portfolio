'use client'
import { motion } from 'framer-motion'
import { div } from 'framer-motion/client'
import React from 'react'
import Image from 'next/image'

export const Skills = () => {
  const skills = [
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"},
    { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", proficiency: 75 },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", proficiency: 70 },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", proficiency: 60 },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", proficiency: 50 },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", proficiency: 70 },
    { name: "React", logo: "/react-original.svg", proficiency: 55 },
    { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", proficiency: 80 },
    { name: "ShadCN", logo: "/shadcn.jpg", proficiency: 70 },
    { name: "GitHub", logo: "/github.svg", proficiency: 60 },
    { name: "Sanity", logo: "/sanity.webp", proficiency: 65 },
  ];
  
  return (
    <section className='py-32 relative' id='skills'>
      <div className='max-w-7xl mx-auto px-6'>
        <motion.div
        initial={{
          opacity:0,
          y:20
        }}
        whileInView={{
          opacity:1,
          y:0
        }}
        transition={{
          duration:0.6,
          delay:0.4
        }}
        className='flex flex-col items-center mb-20'
        >
          <h2 className='text-4xl md:text-5xl text-content mb-4 text-center font-bold'>Skills</h2>
          <div className='w-24 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full'></div>
        </motion.div>
 
  {/* grid section */}

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 z-10'>
           {
            skills.map((items,i) => (
              <motion.div key={i} 
              initial={{
                opacity:0,
                y:20
              }}
              whileInView={{
                opacity:1,
                y:0
              }}
              whileHover={{
                scale:1.05
              }}
              className='max-w-[220px] bg-surface overflow-hidden border-2 border-gray-400 rounded-3xl h-[200px]'>
                 {/* Image */}
              <motion.div
               initial={{
                opacity:0,
                y:20
               }}
               whileInView={{
                opacity:1,
                y:0
               }}
                whileHover={{ scale: 1.05 }}
                 transition={{ duration: 0.2 }}
           className='h-[170px] relative'
                                 >
                                   <Image 
                                     src={items.logo}
                                     alt={items.name}
                                     width={450}
                                     height={300}
                                     
                                     className='object-cover h-[150px] w-full'
                                     priority
                                   />
                                   
              </motion.div>
              <p
              
               className='text-content text-center font-bold mb-3'>{items.name}</p>
                            </motion.div>
            ))
           }
        </div>

      </div>
    </section>
  )
}
