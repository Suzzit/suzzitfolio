import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../images/logo.png'
import * as icons from "react-icons/all"
import { IconContext } from 'react-icons'
import Cards from '../Cards'
import projects from '../content'

function ProjectsLister() {
    return (
        <div className='projectlister'>
            <h2>Some of the projects that I built</h2>

            <div className='projectlister__list'>
                {
                    projects.map((project)=>{
                        return <Cards image={project.image} title={project.title} description={project.description} 
                        codeURL={project.codeURL} demoURL={project.demoURL} />
                    })
                }
            </div>
        </div>
    )
}

export default ProjectsLister
