import React from 'react'
import './projects.css'
import Projcard from './Projcard.jsx'
import Thesispic from '../../assets/thesis.jpg'

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="container project-container">
        <Projcard 
          img={Thesispic}
          name="Arduino-Based Low Cost 3D Profiling Laser Scanner"
          alt="Thesis"
          desciption="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius debitis qui pariatur quia! Ipsam natus minima incidunt officia doloribus quos, eius animi velit quo, optio voluptas commodi veritatis nam repellat?"
          used="Computer Vision/Python/Arduino C++"
        />
      </div>
    </section>
  )
}

export default Projects