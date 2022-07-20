import React from 'react'
import ProjectsLister from '../components/ProjectsLister'
import styled from 'styled-components'

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
    padding: 10px;
    margin: 10px 0px;
  }
`

function Projects() {
  return (
    <ProjectsWrapper>
      <h1>Some of the Projects I've worked on</h1>
    <ProjectsLister />
    </ProjectsWrapper>
  )
}

export default Projects