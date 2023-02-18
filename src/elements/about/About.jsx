import React from 'react'
import './about.css'
import myImage from '../../assets/me.png'

const About = () => {
  return (
    <section id="about">
      <h2>About me</h2>
      <div className="container about-container">
        <div className="my-image">
          <img src={myImage} alt="My Photo" />
        </div>
        <div className="separator"></div>
        <div className="about-content">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Doloremque explicabo assumenda provident laboriosam optio culpa impedit aut nemo vero. Qui ad magnam aut molestias corporis earum voluptatum voluptate itaque officiis?
          </p>
        </div>
      </div>
    </section>
  )
}

export default About