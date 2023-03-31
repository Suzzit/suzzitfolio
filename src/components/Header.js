import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import * as icons from 'react-icons/all'
import Sociallinks from './Sociallinks'
import logo from '../images/logo.svg'

export default function Header(props) {
    const [showNav, setShowNav] = useState(false)
    const [logoWrapperAbsolute, setLogoWrapperAbsolute] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll', (e)=>{
            if(window.scrollY >= 50){
             setLogoWrapperAbsolute(true)   
            }else{
                setLogoWrapperAbsolute(false)
            }
        })
    })

    return (
        <>
    {/* desktop version */}
        <div className='header'>

        <div className='header__logowrapper'>
            <NavLink to={"/"}>
                <img className='header__logowrapper__logo' src={logo} alt="logo" />
            </NavLink>
        </div>

        <nav className='header__nav'>
            <ul>
                <li>
                    <NavLink to="/" onClick={() => (setShowNav(false))}>{props.navItems[0]}</NavLink>
                </li>
                <li>
                    <NavLink to="/projects" onClick={() => (setShowNav(false))}>{props.navItems[1]}</NavLink>
                </li>
                <li>
                    <NavLink to="/blog" onClick={() => (setShowNav(false))}>{props.navItems[2]}</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" onClick={() => (setShowNav(false))}>{props.navItems[3]}</NavLink>
                </li>
            </ul>
        </nav>

        <Sociallinks />
    </div>

        {/* mobile version */}
        <div className='header--mobile'>

            <div className="header--mobile__logowrapper">
                <NavLink to={"/"}>
                    <img className='header--mobile__logowrapper__logo' src={logo} alt="logo" />
                </NavLink>
            </div>

            <div className="header--mobile__hamburgerwrapper"
                onClick={() => (setShowNav(true))}
                role="button"
            >
                <icons.GiHamburgerMenu className='header--mobile__hamburgerwrapper__hamburger'></icons.GiHamburgerMenu>

            </div>

            <nav className={showNav ? 'header--mobile__nav--show' : 'header--mobile__nav'}>
                <div className=''
                    role='button'
                    onClick={() => { setShowNav(false) }}>
                    <icons.CgClose className='header--mobile__nav--show__closebtn'></icons.CgClose>
                </div>
                <ul>
                    <li>
                        <NavLink to="/" onClick={() => (setShowNav(false))}>{props.navItems[0]}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" onClick={() => (setShowNav(false))}>{props.navItems[1]}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog" onClick={() => (setShowNav(false))}>{props.navItems[2]}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" onClick={() => (setShowNav(false))}>{props.navItems[3]}</NavLink>
                    </li>
                </ul>
            </nav>
            <Sociallinks />
        </div>
        </>
    )
}