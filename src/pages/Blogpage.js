import React from 'react'
import styled from 'styled-components'
import Bloggenerator from '../components/Bloggenerator'
// import Blog from '../components/Blog'

const Wrapper = styled.section`
width: 100%;
height: fit-content;
min-height: 82%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 70px;
position: relative;

h1{
  font-family: 'Courier New', Courier, monospace;
}
`

export default function Blogpage() {

  return (
    <Wrapper>
      <h1>My Blogs</h1>
        <Bloggenerator />
    </Wrapper>
  )
}
