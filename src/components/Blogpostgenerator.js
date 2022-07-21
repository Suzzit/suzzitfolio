import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Blogposts = styled.div`
    width: 95%;
    height: fit-content;
    max-height: 170px;
    margin: 10px;
    color: black;
    border: 1px solid black;
    overflow: hidden;

    .blog_title{
      height: fit-content;
      display: block;
      padding: 3px;
      font-size: 20px;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      font-weight: 600;
      margin: 10px;
      overflow: hidden;
    }

    .blog_description{
      height: fit-content;
      max-height: 95px;
      display: block;
      padding: 3px;
      margin: 10px;
      font-size: 16px;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      font-weight: 100;
      overflow: hidden;
    }

`

function Blogpostgenerator(props) {
  const [blogPost, setBlogPost] = useState([])

  useEffect(() => {
    setBlogPost(props.blog)
  }, [])

  return (
    <Link to={`/blog/${props.blogIndex}`}>
      <Blogposts role="button">
      {
        blogPost.length > 0 &&
        blogPost.map(
          (blog) => (
            <div key={props.blogIndex}>
              <h1 className="blog_title">{blog.Title}</h1>
              <p className="blog_description">{blog.Description}</p>
            </div>
          )
        )
      }
    </Blogposts>
    </Link>
  )
}

export default Blogpostgenerator;