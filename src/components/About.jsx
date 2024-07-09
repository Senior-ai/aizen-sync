/* eslint-disable react/no-unknown-property */
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

const About = (isHE) => {
  return (
    <>
      <motion.div variants={textVariant()} className={`xs:mt-16 laptop:mt-32`}>
        <p className={`xs:${styles.sectionSubText} ${styles.sectionSubTextBlack}`}>Introduction</p>
        <h2 className={`xs:${styles.sectionHeadText} ${styles.sectionHeadTextBlack}`}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={`mt-2 text-primary text-[17px] max-w-3xl leading-[30px]`}>
        {isHE ? `אני מפתח מנוסה מתל אביב
        שמתמקד בבניית חוויות דיגיטליות יוצאות דופן,
        ובעל מומחיות בטכנולוגיות פיתוח שונות. לאורך השנים, עבדתי על אפליקציות, אוטומציות שונות ואתרי וורדפרס`
          : `I am a experienced developer based in Tel Aviv,
        specializing in building exceptional digital experiences.
        My areas of expertise include React, Node.js, MongoDB and other modern technologies.
        Over the years, I have worked on Flutter applications, different automations and Wordpress websites.`}

      </motion.p>

      <div className='xs:mt-1 laptop:mt-4 mt-14 flex flex-wrap gap-8 laptop:px-2 px-9'>
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