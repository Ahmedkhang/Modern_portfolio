'use client'

import { motion } from 'framer-motion'
import { FaLinkedin, FaFacebook, FaEnvelope, FaPhone } from 'react-icons/fa';
import React from 'react'

export const Contact = () => {
  return (
    <section className='py-32 relative' id='contact'>
      <div className='max-w-7xl mx-auto px-6'>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='flex flex-col items-center mb-20'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-content text-center mb-4'>Contact</h2>
          <div className='w-24 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full'></div>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='bg-surface p-8 rounded-2xl shadow-lg max-w-2xl mx-auto'
        >
          <div className='grid grid-cols-1 gap-6'>
            {/* Name */}
            <input
              type='text'
              placeholder='Your Name'
              className='w-full p-4 bg-tertiary/10 text-content rounded-lg outline-none focus:ring-2 focus:ring-primary'
              required
            />

            {/* Email */}
            <input
              type='email'
              placeholder='Your Email'
              className='w-full p-4 bg-tertiary/10 text-content rounded-lg outline-none focus:ring-2 focus:ring-primary'
              required
            />

            {/* Message */}
            <textarea
              placeholder='Your Message'
              rows={5}
              className='w-full p-4 bg-tertiary/10 text-content rounded-lg outline-none focus:ring-2 focus:ring-primary'
              required
            ></textarea>

            {/* Submit Button */}
            <button
              type='submit'
              className='w-full bg-primary/10 text-white py-4 rounded-lg hover:bg-opacity-90 transition duration-300 font-semibold'
            >
              Send Message
            </button>
          </div>
        </motion.form>

        {/* Social Links */}
        <motion.div 
        
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        className='flex justify-center gap-6 mt-12'>
          <a href='https://www.linkedin.com/in/ahmed-ur-rehman-b98121279/' className='text-content hover:text-primary transition'><FaLinkedin size={24} /></a>
          <a href='#' className='text-content hover:text-primary transition'><FaFacebook size={24} /></a>
          <a href='#' className='text-content hover:text-primary transition'><FaPhone size={24} /></a>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact;
