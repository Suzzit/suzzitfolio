import React, { useState } from 'react'
import Styled from 'styled-components'
import { BsYoutube, BsGithub, BsLinkedin, BsTwitter, BsToggleOn, BsToggleOff, BsSun, BsMoon } from 'react-icons/bs'

const Sociallinkswrap = Styled.div`
height: 40px;
width: 100%;
position: absolute;
top: 100%; 
left: 0;
background-color: lightgrey;
border: none;
border-top: solid 1px black;

.social_icons-wrap{
    display: inline-block;
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;

    .icons{
        height: 100%;
        width: 20px;
    }
}
.darkmode-wrap{
    position: absolute;
    top: 0;
    left: 100%;
    transform: translateX(-100%);
    height: 100%;
    font-size: 30px;
    width: 100px;
    display: flex;
    justify-content: space-evenly;

    .darkmode_sun_moon{
                height: 100%;
                display: grid;
                place-content: center;
                font-size: 20px;

                .darkmode_sunmoon.hide{
                    display: none;
                }
            }

        /* .darkmode-on-btn{
            display: inline-block;
        }
        .darkmode-off-btn{
            display: inline-block;
        }     */
        .darkmode-btn.hide{
            display: none;
        }

        .toggle-btn-wrap{
            height: 100%;
            display: grid;
            place-content: center;
            position: relative;
            cursor: not-allowed;
        }
}
`

export default function Sociallinks() {
    const [darkModeBtnState, setDarkModeBtnState] = useState(true)
  return (
    <Sociallinkswrap>
        <div className="social_icons-wrap">
            <BsYoutube className='icons'/>
            <BsTwitter className='icons'/>
            <BsLinkedin className='icons'/>
            <BsGithub className='icons'/>
        </div>
        <div className="darkmode-wrap" onClick={()=>setDarkModeBtnState(!darkModeBtnState)}>
        <div className="darkmode_sun_moon">
                    <BsSun className={darkModeBtnState ? "darkmode_sunmoon" : "darkmode_sunmoon hide"}/>
                    <BsMoon className={darkModeBtnState ? "darkmode_sunmoon hide" : "darkmode_sunmoon"} />
                </div>
            <div className="toggle-btn-wrap">
                <BsToggleOn className={darkModeBtnState ? "darkmode-btn hide" : "darmode-btn"} />
                <BsToggleOff className={darkModeBtnState ? "darkmode-btn" : "darkmode-btn hide"} />
            </div>

        </div>
    </Sociallinkswrap>
  )
}
