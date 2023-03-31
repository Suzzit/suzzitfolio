import React from 'react'
import { IconContext } from 'react-icons';
import {BiCopyright} from 'react-icons/all'
import styled from 'styled-components';

const FooterWrapper = styled.div`
    height: 200px;
    min-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    margin-top: 5px;
    padding: 20px;
    
    .siteinfo{
      background-color: lightgray;
      height: fit-content;
      padding: 10px;
      width: 80%;
      min-width: 400px;
      font-family: 'Trebuchet MS';
      display: flex;
      justify-content: center;
    }

    p{
      display: block;
      width: fit-content;
      padding: 10px;
      margin-top: 10px;
      font-family: "Trebuchet MS";
    } 

    .inspirations{
      a{
        text-decoration: none;
      }
    }

    .policies{
      display: flex;
      align-items: center;
      letter-spacing: 1px;

      span{
        text-decoration: underline;
        cursor: pointer;
        margin: 0px 2px;
      }
    }
`

function Footer() {
  return (
    <FooterWrapper>
      <IconContext.Provider value={{size:"1rem"}}>
        <div className='siteinfo'> Site written in JavaScript using React Library </div>
        <p className="inspirations">Inspired from <a href="https://www.bhaskarrijal.me" target="_blank">bhaskarrijal.me</a> <br /></p>
        <p className="policies"> <BiCopyright /> | <span>policies</span> 2022 </p>
      </IconContext.Provider>
    </FooterWrapper>
  )
}

export default Footer;
