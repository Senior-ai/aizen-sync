import React, { useState } from 'react'
import { SocialIcon } from 'react-social-icons'

import { styles } from '../styles'
import { navLinks } from '../constants'

const Footer = () => {
    const [active, setActive] = useState('');
    return (
        <nav className={`${styles.paddingX} w-full flex items-center py-5 bottom-0  absolute bg-transparent`}>
            <div className='w-full flex justify-center items-center max-w-7xl mx-auto flex-col'>
                <ul className='list-none hidden sm:flex flex-row gap-10'>
                    {navLinks.map((link) => (
                        <li key={link.id} >
                            <a href={`#${link.id}`} className={
                                `${active === link.title ? 'text-white' : 'text-secondary'} 
                      hover:text-white text-[18px] font-medium cursor-pointer`}
                                onClick={() => setActive(link.title)}
                            >
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
                <ul className='mt-5 list-none flex-row flex gap-5 mr-4'>
                    <li><SocialIcon url='https://www.linkedin.com/in/shonaizen/' /></li>
                    <li><SocialIcon url='https://www.instagram.com/shon.aizen/' /></li>
                    <li><SocialIcon url='https://github.com/Senior-ai' /></li>
                </ul>
            </div>
        </nav>
    )
}

export default Footer;