import React from 'react'
import { useParams } from 'react-router-dom'

function Blogpost() {
  const blogInfo = useParams()
  return (
    <div>
      {blogInfo.blogTitle}
    </div>
  )
}

export default Blogpost