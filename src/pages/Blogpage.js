import React, {useEffect} from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import styled from 'styled-components'
import Bloggenerator from '../components/Blogpagecomponents/Blogfetcher'
import Blogpost from '../components/Blogpagecomponents/Blogpost'

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

  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Wrapper>
        <h1>My Blogs</h1>
        <Bloggenerator />
        <Routes>
          <Route exact path='/:blogTitle' element={<Blogpost />} />
        </Routes>
      </Wrapper>
    </>
  )
}
