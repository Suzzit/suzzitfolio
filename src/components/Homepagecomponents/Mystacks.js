import React from 'react'
import styled from 'styled-components';
import * as icons from 'react-icons/all'
import { IconContext } from 'react-icons';

const Wrapper = styled.div`
height: 85%;
width: 100%;

h1{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
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
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }

    div{
        height: 50px;
        border: 1px solid black;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2px 10px;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-style: italic;
    }
}
`


function Mystacks() {
  return (
    <Wrapper>
        <h1>My Stacks</h1>
        <div className="grid_show">
            <IconContext.Provider value={{color:"black", size:"26px"}}>
            <h2>Frontend</h2>
            <div>Javascript - ReactJS <icons.SiReact></icons.SiReact></div>
            <div>State Management - ReduxJS <icons.SiRedux></icons.SiRedux></div>

            <h2>Backend</h2>
            <div>NodeJS <icons.SiNodedotjs></icons.SiNodedotjs></div>
            

            <h2>Database</h2>
            <div>MongoDB <icons.SiMongodb></icons.SiMongodb></div>
            <div>Firebase <icons.SiFirebase></icons.SiFirebase></div>
            </IconContext.Provider>
            
        </div>
    </Wrapper>
  )
}

export default Mystacks;
