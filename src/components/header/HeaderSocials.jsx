import React from 'react'
import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {SiGmail} from 'react-icons/si';


const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com/in/aituayuwa-david-3889a036a" target="_blank"><FaLinkedin/></a>
        <a href="https://github.com/David-Osas-bot" target="_blank"><FaGithub/></a>
        <a href="mailto:aituayuwaosas@gmail.com" target="_blank"><SiGmail/></a>

    </div>
  )
}

export default HeaderSocials
