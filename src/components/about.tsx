'use client'
import { motion } from 'framer-motion'
import React from 'react'

export default function About() {
  return (
    <section className='py-32 relative' id='about'>
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
          <h2 className='text-4xl md:text-5xl text-content font-bold mb-4'>About Me</h2>
          <div className='w-24 h-1 bg-gradient-to-r from-primary to-tertiary'>

          </div>
        </motion.div>
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
        className="text-center">

          <p className="text-lg text-content leading-relaxed max-w-3xl mx-auto">
            Hi, I'm <span className='font-bold'>Ahmed Ur Rehman</span> — a passionate <span className='font-bold'>Front-end Developer</span> specializing in
            <span className='font-bold'> Next JS</span> and <span className='font-bold'>Tailwind CSS</span> With over a year of experience in HTML and CSS, 
            I’m constantly learning and growing to deliver responsive, high-performance websites.
            I love turning creative ideas into beautiful, functional web experiences.
          </p>
          <p className="text-lg text-content leading-relaxed max-w-3xl mx-auto mt-4">
            I'm currently learning Python and exploring 
            Agentic A.I. I’m also stepping into 
            the world of **freelancing** on platforms like Upwork and Fiverr.
          </p>
      </motion.div>
      </div>
    </section>
  )
}
