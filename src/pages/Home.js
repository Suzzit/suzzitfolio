import React from 'react'
import styled from 'styled-components'
import Intro from '../components/Homepagecomponents/Intro'
import Mystacks from '../components/Homepagecomponents/Mystacks'

const Homewrap = styled.section`
height: fit-content;
max-width: 100%;
`

export default function Home() {
  return (
    <Homewrap>
      <Intro />
      <Mystacks />
    </Homewrap>
  )
}
