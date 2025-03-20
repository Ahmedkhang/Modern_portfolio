'use client'
import { motion } from 'framer-motion'
import React from 'react'

export default function About() {
  return (
    <section className='py-32 relative'>
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
      </div>
    </section>
  )
}
