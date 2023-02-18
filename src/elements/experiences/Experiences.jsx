import React from 'react'
import './experiences.css'
import Expcard from './Expcard.jsx'
import fccrwd from '../../assets/FCC_RWD.png'
import linuxAd from '../../assets/LinuxAd.png'

const Experiences = () => {
  return (
    <section id="experiences">
      <h2>Experiences</h2>
      <div className='container experience-container'>
        <Expcard 
          img={fccrwd}
          alt="RWD-FCC Certificate"
          name="Resposive Web Design"
          subname="freecodecamp.org"
        />
        <Expcard 
          img={linuxAd}
          alt="Linux Admin Certificate"
          name="Linux System Administration"
          subname="mnet-it.com"
        />
      </div>
    </section>
  )
}

export default Experiences