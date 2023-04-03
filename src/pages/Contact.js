import React, {useRef, useEffect} from 'react'
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

const ContactWrapper = styled.section`
    width: 100%;
    height: 85vh;
    margin-top: 70px;

    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    h2{
        width: 50%;
        text-align: center;
        padding: 10px;
        margin: 10px 0px;
        font-family: 'Courier New', Courier, monospace;
    }

    #emailinput{
        width: 50%;
        min-width: 300px;
        display: block;
        height: 50px;
        padding: 0px 5px;
        margin: 10px 0px;
        font-family: 'Courier New', Courier, monospace;
        font-weight: 600;
        font-size: 15px;
        border: 1px solid black;
    }

    #message{
        width: 50%;
        min-width: 300px;
        padding: 5px;
        margin: 10px 0px;
        font-size: 15px;
        border: 1px solid black;
        resize: none;
    }

    #submitbtn{
        width: 50%;
        min-width: 300px;
        height: fit-content;
        padding: 10px;
        background-color: lightgrey;
        border: 1px solid black;
        cursor: pointer;
    }
    }
`

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_u13lkcu', 'template_wyba5cq', form.current, "UytteNavZyKjddpkI")
            .then((result) => {
                console.log(result);
            }, (error) => {
                console.log(error.text);
            });
    };

    useEffect(()=>{
        window.scrollTo(0, 0)
    }, [])
    return (
        <ContactWrapper>
            <form ref={form}>
                <h2>Mail me</h2>
                <input name='emailinput' id="emailinput" type="text" placeholder="Your email" required />
                <textarea name="message" id="message" cols="50" placeholder="Message" rows="10" />
                <input id="submitbtn" type="submit" value={"Send Mail"} onClick={sendEmail}/>
            </form>
        </ContactWrapper>
    )
}


export default Contact;