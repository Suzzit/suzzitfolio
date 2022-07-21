import React, { useState } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import * as icons from 'react-icons/all'
import Sociallinks from './Sociallinks'
import logo from '../images/logo.png'
import '../styles/header.scss'

export default function Header(props) {
    const [showNav, setShowNav] = useState(false)

    return (
        <div class="header-container">
            <div className="logo_wrapper">
                <NavLink to={"/"}>
                    <img src={logo} alt="logo" />
                </NavLink>
            </div>

            <div className="header_hamburger-wrap"
                onClick={() => (setShowNav(true))}
                role="button"
            >
                <icons.GiHamburgerMenu className='hamburger-icon'></icons.GiHamburgerMenu>
            </div>

            <nav className={showNav ? 'header_navbar show' : 'header_navbar'}>
                <div className='closenav-wrap'
                    role='button'
                    onClick={() => { setShowNav(false) }}>
                    <icons.CgClose className='menuclose-btn'></icons.CgClose>
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
    )
}
