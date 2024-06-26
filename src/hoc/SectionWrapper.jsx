import { motion } from 'framer-motion'
import { styles } from '../styles'
import { staggerContainer } from '../utils/motion'
import AboutBackgroundImage from "/assets/about_background.png";

const SectionWrapper = (Component, idName,) => {
    return function HOC() {
        const sectionStyle = idName === 'about' ? {
            backgroundColor: '#050816 !important',
            backgroundImage: `url(${AboutBackgroundImage})`,
            backgroundRepeat: 'no-repeat',
        } : {};

        return (
            <div style={sectionStyle} className={`laptop:bg-contain xl:bg-cover`}>
                <motion.section
                    variants={staggerContainer()}
                    initial='hidden'
                    whileInView='show'
                    viewport={{ once: true, amount: 0.25 }}
                    className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
                >
                    <span className='hash-span' id={idName}>
                        &nbsp;
                    </span>
                    <Component />
                </motion.section>
            </div>
        )
    }
}
export default SectionWrapper