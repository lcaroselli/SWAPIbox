import React from 'react';
import './Card.css';
import Star from '../../../assets/favorites-star.svg'

const Card = ( { subject } ) => {
  const cardKeys = Object.keys(subject)

  const cardArray = cardKeys.map((key, i) => {
    console.log(key)
    return (
      <div>
        <p className='category-data'> { subject[key] } </p>
      </div>
    )
  })

  return(
    <div>
      <section className='card'>
        <button className='favorite-btn'><img src={ Star }/></button>
        { cardArray }
      </section>
    </div>
  )
}

export default Card
