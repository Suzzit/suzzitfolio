import React, { useState } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import * as icons from 'react-icons/all'
import Sociallinks from './Sociallinks'
import logo from '../images/logo.png'

const HeaderStyles = styled.div`
background-color: white;
max-width: 100%;
height: 70px;
min-height: 10vh;
position: relative;
border-bottom: 1px solid black;
border-top: 1px solid black;
margin-top: 5px;
z-index: 100;
display: flex;
justify-content: center;
align-items: center;
position: sticky;
left: 0;
top: 0;

a{

}
.logo_wrapper{
            height: 100%;
            width: 200px;
            min-width: fit-content;
            cursor: pointer;

            img{
                height: 100%;
                width: 100%;
                object-fit: contain;
            }
        }

/* display: none; */

/* .pagetitle{
    background-color: red;
    display: inline-block;
    height: 100%;
    width: 150px;
    min-width: 150px;
    font-family: 'Courier New', Courier, monospace;
    display: grid;
    place-content: center;
} */

.header_hamburger-wrap{
width: 50px;
position: absolute;
left: 100%;
top: 0;
transform: translateX(-100%);
display: flex;
justify-content: center;
margin-top: 15px;

.hamburger-icon{
    font-size: 2rem;
}
}

    .header_navbar.show{
        transform: translateX(-100%);
        transition: transform 0.5s ease-in;
        width: fit-content;
        box-shadow: -1px -1px 10px black;
        position: fixed;
    }
    .header_navbar{
        height: 100vh;
        min-width: 255px;
        padding: 10px;
        left: 100%;
        top: 0;
        position: absolute;
        transition: transform 0.5s ease-in; 
        background-color: white;
        z-index: 100;

        .closenav-wrap{
            height: 50px;
            width: 50px;
            display: grid;
            place-content: center;
            position: absolute;
            top: 0;
            left: 0;
            margin: 5px 5px;

            .menuclose-btn{
            font-size: 2rem;
        }
        }

        ul{
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
            list-style-type: none;

            li{
                margin: 10px 5px;
                a{
                    text-decoration: none;
                    color: black;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    font-weight: 500;
                    text-transform: uppercase;
                    font-size: clamp(15px, 10px, 16px);
                }
            }
        }
    }

    @media screen and (min-width: 1000px) {
        .logo_wrapper{
            height: 100%;
            width: 200px;
            min-width: fit-content;

            img{
                height: 100%;
                width: 100%;
                object-fit: contain;
            }
        }

        .header_hamburger-wrap{
            display: none;
        }
        .menuclose-btn{
            display: none;
        }
        .header_navbar{
            height: 100%;
            width: 100%;
            position: static;
            z-index: -1;

            ul{
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;

                li{

                    a{
                        &:hover{
                        text-decoration: underline;
                        }
                    }
                }
            }
        }
    }
`

export default function Header(props) {
    const [showNav, setShowNav] = useState(false)

    return (
        <HeaderStyles>
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
        </HeaderStyles>
    )
}
