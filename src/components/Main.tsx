'use client'
import { motion } from 'framer-motion'
import React from 'react'

import { FaNode, FaReact } from "react-icons/fa";
import { SiD3Dotjs, SiFirebase, SiGraphql, SiNextdotjs, SiTailwindcss, SiTypescript, SiSanity } from "react-icons/si";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import { FaCss3Alt } from "react-icons/fa";
import Link from 'next/link';
// import { link } from 'fs';
import { FaHtml5 } from "react-icons/fa";

const Main = () => {
  const projects = [
    {
      title: 'FoodTuck - Food Delivery Web App',
      description: 'A food delivery app',  
      tech: [
        { name: 'Next JS', icon: <SiNextdotjs />, color: 'white' },
        { name: 'TypeScript', icon: <SiTypescript />, color: '#06B6D4' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
        { name: 'Sanity', icon: <SiSanity />, color: '#E75C17' },
      ],
      link: 'https://restaurant-web-hackathon-r3ju.vercel.app',
      image: '/portfolio6.webp'
    },
    {
      title: 'TechBlog - Blog App',
      description: 'Blog App For Tech Enthusiasts',
      tech: [
        { name: 'Next JS', icon: <SiNextdotjs />, color: 'white' },
        { name: 'TypeScript', icon: <SiTypescript />, color: '#06B6D4' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
        { name: 'Sanity', icon: <SiSanity />, color: '#E75C17' },
      ],
      link: 'https://blogs-site-amcn.vercel.app/',
      image: '/portfolio6.webp'
    },
    {
      title: 'Coffee Shop',
      description: 'A coffee shop website for coffee lovers',
      tech:[
        {name:'HTML',icon:<FaHtml5 />, color: 'white'},
        {name:'CSS',icon:<FaCss3Alt />, color: 'white'},
      ],
      link: 'https://vibe-coding-websites.vercel.app/',
      image:'/portfolio6.webp'
    },
    
    {
      title: 'Next JS Mini Projects',
      description: 'Mini Projects in Next JS',
      tech:[
        { name: 'Next JS', icon: <SiNextdotjs />, color: 'white' },
        { name: 'TypeScript', icon: <SiTypescript />, color: '#06B6D4' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
      ],
      link: 'https://mini-next-js-projects-liart.vercel.app/',
      image:'/portfolio6.webp'
    }
  ]

  return (
    <section className='py-32 relative' id='projects'>
      <div className='max-w-7xl mx-auto px-6'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='flex flex-col items-center mb-20'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-content mb-4 text-center'>
            Selected Work
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full'></div>
        </motion.div>

        {/* Project grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10'>
          {projects.map((items) => (
            <Link href={items.link} key={items.title} target="_blank" rel="noopener noreferrer">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className='border bg-surface relative h-[500px] rounded-3xl overflow-hidden cursor-pointer border-white/10'
              >
                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className='h-[250px] relative'
                >
                  <Image 
                    src={items.image}
                    alt={items.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className='object-cover w-full'
                    priority
                  />
                </motion.div>

                {/* Content Section */}
                <motion.div className='p-6 h-[25px] bg-surface' transition={{ duration: 0.3 }}>
                  <div className='flex justify-between items-start mb-4 group/title'>
                    <h3 className='text-2xl font-bold text-content'>{items.title}</h3>
                    <ArrowUpRightIcon className="h-6 w-6 text-content/50 group-hover/title:text-primary transition-colors duration-300" />
                  </div>
                  <p className='text-content/80 mb-4'>{items.description}</p>

                  {/* Tech Stack */}
                  <div className='flex flex-wrap gap-2'>
                    {items.tech.map((tech) => (
                      <span
                        key={tech.name}
                        className="px-3 py-1 rounded-full bg-white/5 text-content/80 text-sm border border-white/5 hover:bg-surface transition-colors flex items-center gap-1.5 group/tech"
                      >
                        {tech.icon}
                        <span className='group-hover/tech:text-content transition-colors'>
                          {tech.name}
                        </span>
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className='flex justify-center'
        >
          <button className='mt-2 relative px-8 py-3 rounded-full bg-surface border border-white/10 hover:border-primary transition-all group'>
            <span className='text-content transition-colors'>View More</span>
            <div className='absolute inset-0 bg-gradient-to-r from-primary/10 to-tertiary/10 opacity-0 group-hover:opacity-100 rounded-full transition-opacity'></div>
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Main
