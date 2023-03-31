import React, { useEffect } from 'react'
import Intro from '../components/Homepagecomponents/Intro'
import Mystacks from '../components/Homepagecomponents/Mystacks'

export default function Home() {

  useEffect(()=>{
    window.scrollTo(0, 0)
  })
  return (
    <div className='homemain'>
      <Intro />
      <Mystacks />
    </div>
  )
}
