import React from 'react'
import styled from 'styled-components'
import Intro from '../components/Intro'
import Mystacks from '../components/Mystacks'

const Homewrap = styled.section`
min-height: 100vh;
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
