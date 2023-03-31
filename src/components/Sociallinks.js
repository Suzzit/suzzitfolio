import React, { useState } from 'react'
import Styled from 'styled-components'
import { Link } from 'react-router-dom'
import { BsYoutube, BsGithub, BsLinkedin, BsTwitter, BsToggleOn, BsToggleOff, BsSun, BsMoon } from 'react-icons/bs'

const Sociallinkswrap = Styled.div`
`

export default function Sociallinks() {
    const [darkModeState, setDarkModeState] = useState(false)

    return (
        <div className='social'>

            <div className="social__iconswrapper">
                <a href='https://github.com/Suzzit'><BsGithub className='social__iconswrapper__icons github' /></a>
                <a href="https://www.youtube.com/channel/UCqNwmXP99A8XU6utGfYnT1A"><BsYoutube className='social__iconswrapper__icons youtube' /></a>
                <a href='https://www.linkedin.com/in/suzzit-bajagain-7a35b7187/'><BsLinkedin className='social__iconswrapper__icons linkedin' /></a>
            </div>

            <div className="social__darkmodewrapper" onClick={() => setDarkModeState(!darkModeState)}>
                <div className="social__darkmodewrapper__icons">
                    <BsSun className={darkModeState ? "social__darkmodewrapper__sunmoon" : "social__darkmodewrapper__sunmoon--hide"} />
                    <BsMoon className={darkModeState ? "social__darkmodewrapper__sunmoon--hide" : "social__darkmodewrapper__sunmoon"} />
                </div>

            </div>
        </div>
    )
}
