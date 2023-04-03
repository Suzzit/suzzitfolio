import React from 'react'
import image from '../images/minstagram.png'
import * as icons from 'react-icons/all';

const Cards = (props) => {
    const {image, title, description, codeURL, demoURL} = props;
    return (
        <div className='projectlister__list__card'>
            <img src={image} alt={`project-image-${title}`} className='projectlister__list__card__img' />

                <div className='projectlister__list__card__titlewrapper'>
                <div className='projectlister__list__card__titlewrapper__title'> {title}</div>
                <div className='projectlister__list__card__titlewrapper__desc'> {description || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo beatae quibusdam delectus suscipit, alias, omnis accusamus architecto ducimus iure fuga a unde ullam provident ratione necessitatibus molestiae? Quos, possimus aperiam?"}
                </div>
                <div className='projectlister__list__card__titlewrapper__links'>
                <a href={codeURL}><icons.BsGithub></icons.BsGithub></a>
                <a href={demoURL}>live demo</a>
                </div>
            </div>

            </div>
            )
}

            export default Cards