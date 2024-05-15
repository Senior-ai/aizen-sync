import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send(
      'service_zzr2uwp',
      'template_wx6p79t',
      {
        from_name: form.name,
        to_name: 'Sean',
        from_email: form.email,
        to_email: 'shon.aizen@gmail.com',
        message: form.message
      },
      'oQ6CdXw09umIdgEDN'
    )
      .then(() => {
        setLoading(false);
        alert('Thank you! I will get back to you as soon as possible');
        setForm({
          name: '',
          email: '',
          message: ''
        })
      }, (err) => {
        setLoading(false);
        console.log(err);
        alert('Whoops! something went wrong..')
      })
  }

  return (
    <div className='xl:mt-[250px] xl:mb-[350px] xl:flex-row flex-col-reverse
    gap-10 overflow-hidden z-20'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-[#3c1a84] p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <div className='xs:flex-col-reverse flex-row flex justify-between'>

          <form ref={formRef}
            onSubmit={handleSubmit}
            className='xs:w-auto xs:mt-4 mt-12 flex flex-col gap-8 w-[55%]'
          >
            <label className='flex flex-col'>
              <span className='text-white
            font-medium mb-4'>Your name</span>
              <input
                type="text"
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className='bg-tertiary py-4 px-6
              text-white placeholder:text-secondary rounded-lg
              outlined-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white
            font-medium mb-4'>Your Email</span>
              <input
                type="email"
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className='bg-tertiary py-4 px-6
              text-white placeholder:text-secondary rounded-lg
              outlined-none border-none font-medium '
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white
            font-medium mb-4'>Your Message</span>
              <textarea
                rows='6'
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder="What's your request?"
                className='bg-tertiary py-4 px-6
              text-white placeholder:text-secondary rounded-lg
              outlined-none border-none font-medium '
              />
            </label>
            <button
              type='submit'
              className='bg-tertiary py-3 px-8
            outline-none w-fit text-white font-bold
            shadow-md shadow-primary rounded-xl'
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
          <div className='xs:w-auto xs:mt-3 mt-8 flex w-[40%] flex-col'>
            <p className={styles.sectionHeadText} style={{ fontSize: '24px' }}>Get a project in mind?</p>
            <p className={styles.sectionSubText} style={{ fontSize: '14px', marginTop: '16px' }}>I would love to speak to you about it.<br />
              Feel free to call, send me an email or follow me in social media or simply complete the inquiry form.</p>
          </div>
        </div>

      </motion.div>
    </div>
  )
}

const WrappedContact = SectionWrapper(Contact, 'contact');
export default WrappedContact;
