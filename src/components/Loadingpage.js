import React from 'react'
import styled from 'styled-components'

const LoadingPage = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
`

export default function Loadingpage(props) {
  return (
    <LoadingPage>
        <p>Fetching {props.whatloading}...</p>
    </LoadingPage>
  )
}
