import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import profile from '../../images/profile_image_final.png'

const Introwrap = styled.div` 
width: 100%;
min-height: 550px;
position: relative;
display: flex;
flex-direction: column;
justify-content: flex-start;
margin-top: 50px;

.imgsection{
  width: 100%;
  height: 150px;
  display: flex;
  align-items: flex-end;
  padding-left: 30px;

  .profile_image{
    height: 100px;
    width: 100px;
    border-radius: 50%;
    border: 2px solid darkblue;
    background-color: skyblue;
    filter: contrast(1.2);
  }
}
.infosection{
  height: 300px;
  padding: 10px 30px;

  .greetings{
    font-family: 'Courier New', Courier, monospace;
    font-weight: 600;
  }

  h1{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 3rem;
    margin: 0px 0px 5px 0px;
  }

  .skillroles{
    font-size: 16px;
    font-family: "Trebuchet MS";
    font-style: italic;
    font-weight: 700;
    color: grey;
  }

  .studiesinfo{
    margin: 5px 0px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 20px;
    font-weight: 600;
  }

  .moreinfo{
    margin: 5px 0px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 18px;
    font-weight: 600;
  }

  a{
      color: black;
      text-decoration: none;

      .btns_contactandprojects{
        width: 100%;
        padding: 7px;
        background-color: lightgray;
        border: 1.5px solid black;
        border-radius: 3px;
        font-size: 18px;
        font-family: 'Trebuchet MS';
        font-weight: 600;
        margin: 5px 0px;

        &:hover{
          cursor: pointer;
        }
      }
  }
}
`

export default function Intro(props) {
  return (
    <Introwrap>
      <div className="imgsection">
        <img className="profile_image" src={profile} alt="profile" />
      </div>

      <div className="infosection">
        <p className="greetings">Namaste I'm</p>
        <h1>Suzzit</h1>
        <p className="skillroles">Fullstack Developer / Software Engineer</p>
        <p className="studiesinfo">Currently studying Bsc.CSIT at Tribhuvan University</p>
        <p className="moreinfo">I don't care about my hairstyle but my sites are properly styled</p>
        <Link to={"/contact"}><button className='btns_contactandprojects'>Contact Me</button></Link>
        <Link to={"/projects"}><button className='btns_contactandprojects'>My projects</button></Link>
      </div>
    </Introwrap>
  )
}
