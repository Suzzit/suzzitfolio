import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../images/logo.png'
import * as icons from "react-icons/all"
import { IconContext } from 'react-icons'
import Cards from '../Cards'

function ProjectsLister() {
    return (
        <div className='projectlister'>
            <h2>Every Project is a unique piece of development</h2>

            <div className='projectlister__list'>
                <Cards title='Instagram Clone' url="https://www.github.com" desc="I tried to copy UI and some functionality of Instagram including user register & logins and creating new posts"/>
                <Cards title='AI Media' url="https://www.github.com" />
                <Cards title='Portfolio' url="https://www.github.com" />
            </div>
        </div>
    )
}

export default ProjectsLister
