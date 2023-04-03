import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import * as icons from 'react-icons/gi'

const ErrorPage = styled.div`
    height: 100px;
    width:100%;    
    display: grid;
    place-content: center ;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);

    h2{
        font-size: 20px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }

    p{
      width: 100%;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }

    a{
      width: 100%;
      display: block;
      padding: 10px;
      text-align: center;
      text-decoration: none;
    }
`

export default function Errorpage(props) {
  return (
    <ErrorPage>
      <h2>Oop's...</h2> <br/>
        <p>
          Something's Gone Wrong
        </p>
        <Link to={"/"}> Back to homepage</Link>
    </ErrorPage>
  )
}
