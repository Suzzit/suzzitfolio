import React from 'react'
import { Link } from 'react-router-dom'
import profile from '../../images/profile_image_final.png'

export default function Intro(props) {
  return (
    <div className='intro'>
      <div className="intro__imgsection">
        <img className="intro__imgsection__profileimg" src={profile} alt="profile" />
        <h2>Suzz <span>it</span></h2>
      </div>

      <div className="intro__infosection">
        <h4 className='intro__infosection__role'>frontend developer</h4>
        <p>Student of BSc. CSIT at Tribhuvan University</p>

        <div className='intro__infosection__links'>
          <Link to='/projects'>My Works</Link>
          <Link to='/contact'>Contact Me</Link>
        </div>
        
      </div>
    </div>
  )
}
