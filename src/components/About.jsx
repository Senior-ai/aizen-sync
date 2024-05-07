/* eslint-disable react/no-unknown-property */
import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from './../hoc';


// eslint-disable-next-line react/prop-types
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div options={{ max: 45, scale: 1, speed: 450 }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
}

ServiceCard.propTypes = {

}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className='laptop:mt-14 mt-32'>
        <p className={styles.sectionSubTextBlack}>Introduction</p>
        <h2 className={styles.sectionHeadTextBlack}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-primary text-[17px] max-w-3xl leading-[30px]'>
        I am a experienced developer based in Tel Aviv,
        specializing in building exceptional digital experiences.
        My areas of expertise include React, Node.js, MongoDB and other modern technologies.
        Over the years, I have worked on Flutter applications, different automations and Wordpress websites.
      </motion.p>

      <div className='laptop:mt-4 mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index}
            {...service} />
        ))}
      </div>
    </>
  )
}

const WrappedAbout = SectionWrapper(About, 'about');
export default WrappedAbout;