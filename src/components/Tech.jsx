import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { styles } from "../styles"
import { motion } from 'framer-motion';
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Tech</p>
        <h2 className={styles.sectionHeadText}>Services</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        <span className="text-secondary text-center">At AizenSync, we specialize in a wide range of digital services designed to <br />
          empower your online presence and propel your business to new heights. <br />
          Our services are tailored to meet the diverse needs of our clients, <br />
          providing innovative solutions that drive success. <br /> <br />
          Our team crafts captivating and responsive websites,
          innovative applications, <br />
          and user-friendly web solutions. <br />
          We guide you through the complex world of cloud architecture and data privacy,
          optimizing scalability and security. <br /> <br />
          Plus, our specialists ensure the reliability and performance of your DNS and email services, enhancing high-performance online communication.<br />
          We also excel in automations and developing extensions,
          streamlining your processes and expanding your online capabilities.
        </span>
        {technologies.map((technology) => (
          <div key={technology.name} className="w-28 h-28">
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  )
}

const WrappedTech = SectionWrapper(Tech, 'Tech');
export default WrappedTech;
