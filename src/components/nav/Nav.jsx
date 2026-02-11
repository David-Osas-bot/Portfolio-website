import React from 'react'
import './nav.css'
import { IoHomeOutline } from 'react-icons/io5';
import { FaUserAlt } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa6';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageDetail } from 'react-icons/bi';
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('')
  return (
    <nav>
      <a href="#"  onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><IoHomeOutline /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserAlt /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaBook /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BiMessageDetail /></a>
    </nav>
  )
}

export default Nav
