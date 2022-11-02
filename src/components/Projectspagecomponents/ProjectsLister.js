import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../images/logo.png'
import * as icons from "react-icons/all"
import { IconContext } from 'react-icons'

const ProjectsListWrap = styled.div`
height: 400px;
width: 70%;
min-width: 300px;
position: relative;
background-color: red;

.project-details{
    height: 100%;
    width: 100%;
    position: relative;

    .project-title{
        width: 100%;
        min-width: 250px;
        height: 50px;
        background-color: rgba(0,0,0,0.3);
        position: absolute;
        top: 100%;
        left: 0;
        transform: translateY(-100%);
    }

    img{
    height: 100%;
    width: 100%;
    object-fit: cover;
}
}

.slidebtns{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: transparent;
    z-index: 10;

    &:hover{
        cursor: pointer;
        background-color: rgba(0,0,0,0.3);
    }

    .slidingicons{
        background-color: rgba(0,0,0,0.3);
        height: 50px;
        width: 50px;
        border-radius: 50%;
        color: black;
        padding: 10px;
    }
}
`

function ProjectsLister() {
  return (
    <ProjectsListWrap>
        <div className="slidebtns">
            <IconContext.Provider value={{size:"50px", color:"black"}}>
            <icons.FcPrevious className="slidingicons"></icons.FcPrevious>
            <icons.FcNext className="slidingicons"></icons.FcNext>
            </IconContext.Provider>
        </div>

        <div className="project-details">
            <h2 className="project-title">
                React Social Media App
            </h2>
            <Link to={"#"}>
                <img src={logo} alt="sample-logo" />
            </Link>
        </div>
    </ProjectsListWrap>
  )
}

export default ProjectsLister
