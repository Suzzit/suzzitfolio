import React, { useState, useEffect } from 'react'
import Blogpostgenerator from './Blogpostgenerator'
import Loadingpage from './Loadingpage'
import Errorpage from './Errorpage'
import styled from 'styled-components'

const BlogsWrapper = styled.div`
height: fit-content;
min-height: 300px;
display: flex;
flex-direction: column;
align-items: center;
`

export default function Bloggenerator(props) {
  const [blogList, setBloglist] = useState([])
  const [loading, setLoading] = useState(false)
  // const [errorCode, setErrorCode] = useState(0)
  const [error, setError] = useState(false)

  function blogFetcher() {
    setLoading(true)
    fetch('content.json')
      .then((res) => {
        if (res.status !== 200) {
          throw (res.status)
        }
        return res.json()
      }).then((data) => {
        setBloglist(data)
      }).catch((errcode) => {
        setError(true)
      }).finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    blogFetcher()
  }, [])


  return (
    <BlogsWrapper>
      {
        loading ?
          <Loadingpage whatloading={"Blogs"} /> :
          error ? <Errorpage /> :
            blogList.length > 0 &&
            blogList.reverse().map((blogs, blogIndex) => (
              <Blogpostgenerator key={blogIndex} blog={[blogs]} blogIndex={blogIndex} />
            )
            )

      }
    </BlogsWrapper>
  )
} 