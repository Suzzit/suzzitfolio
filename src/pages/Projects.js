import React, { useEffect } from 'react'
import ProjectsLister from '../components/Projectspagecomponents/ProjectsLister'

function Projects() {

  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='projects'>
      <ProjectsLister />
    </div>
  )
}

export default Projects