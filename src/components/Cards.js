import React from 'react'
import image from '../images/profile_image_final.png'
import { NavLink } from 'react-router-dom'

const Cards = (props) => {
    return (
        <div className='projectlister__list__card'>
            <img src={image} alt="Project-image" className='projectlister__list__card__img' />

            <div className='projectlister__list__card__titlewrapper'>
                <div className='projectlister__list__card__titlewrapper__title'> {props.title}</div>
                <div className='projectlister__list__card__titlewrapper__desc'> {props.desc || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo beatae quibusdam delectus suscipit, alias, omnis accusamus architecto ducimus iure fuga a unde ullam provident ratione necessitatibus molestiae? Quos, possimus aperiam?"}
                </div>
                <a href={props.url}>Open in github</a>
            </div>

            </div>
            )
}

            export default Cards