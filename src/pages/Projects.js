import React, { useEffect } from 'react'
import ProjectsLister from '../components/Projectspagecomponents/ProjectsLister'
import styled from 'styled-components'
import { useState } from 'react'

const ProjectsWrapper = styled.section`
  height: 84vh;
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1{
    font-family: 'Courier New', Courier, monospace;
    width: 50%;
    min-width: 250px;
    padding: 10px;
    margin: 10px 0px;
    font-size: 1rem;
    text-align: center;
    font-weight: 600;
  }
`

function Projects() {
  return (
    <ProjectsWrapper>
      <h1>Some of the Projects that I've worked on</h1>
    <ProjectsLister />
    </ProjectsWrapper>
  )
}

export default Projects