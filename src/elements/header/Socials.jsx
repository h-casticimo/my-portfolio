import React from 'react'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'
import {SiReplit} from 'react-icons/si'

const Socials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><AiOutlineLinkedin className="icon" size={30}/></a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer"><BsGithub className="icon" size={30}/></a>
        <a href="https://replit.com" target="_blank" rel="noopener noreferrer"><SiReplit className="icon" size={30}/></a>
    </div>
  )
}

export default Socials