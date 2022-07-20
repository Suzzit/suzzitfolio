import React from 'react'
import styled from 'styled-components';
import * as icons from 'react-icons/all'
import { IconContext } from 'react-icons';

const Wrapper = styled.div`
height: 85vh;
width: 100%;

h1{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Courier New', Courier, monospace;
}

.grid_show{
    display: grid;
    place-content: center;
    width: 100%;
    grid-template-columns: 90%;
    row-gap: 5px;
    padding: 10px;

    h2{
        margin: 20px 0px 0px 0px;
        font-family: 'Courier New', Courier, monospace;
    }

    div{
        height: 50px;
        border: 1px solid black;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2px 10px;
        font-family: 'Trebuchet MS';
        font-weight: 600;
        font-style: italic;
    }
}
`


function Mystacks() {
  return (
    <Wrapper>
        <h1>My Stacks</h1>
        <div className="grid_show">
            <IconContext.Provider value={{color:"black", size:"25px"}}>
            <h2>Frontend</h2>
            <div>Javascript - ReactJS <icons.RiReactjsLine></icons.RiReactjsLine></div>

            <h2>Backend</h2>
            <div>Javascript - NodeJS <icons.FaNodeJs></icons.FaNodeJs></div>
            <div>Python - Django <icons.SiDjango></icons.SiDjango></div>

            <h2>Database</h2>
            <div>MongoDB <icons.SiMongodb></icons.SiMongodb></div>
            <div>Firebase <icons.SiFirebase></icons.SiFirebase></div>
            </IconContext.Provider>
            
        </div>
    </Wrapper>
  )
}

export default Mystacks;
