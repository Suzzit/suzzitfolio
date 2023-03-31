import React, { useEffect } from 'react'
import ProjectsLister from '../components/Projectspagecomponents/ProjectsLister'
import styled from 'styled-components'
import { useState } from 'react'

function Projects() {
  return (
    <div className='projects'>
      <ProjectsLister />
    </div>
  )
}

export default Projects