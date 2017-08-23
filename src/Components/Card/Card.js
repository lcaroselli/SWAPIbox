import React from 'react';
import './Card.css';
import Star from '../../../assets/favorites-star.svg'

const Card = () => {
  return(
    <div>
      <section className='card'>
        <button className='favorite-btn'><img src={ Star }/></button>
        <p className='name'>Name: </p>
        <p>Homeworld: </p>
        <p>Species: </p>
        <p>Population: </p>
      </section>
    </div>
  )
}

export default Card
