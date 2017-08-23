import React from 'react';
import './Card.css';
import Star from '../../../assets/favorites-star.svg'

const Card = ( { subject } ) => {
  const cardKeys = Object.keys(subject)

  const cardArray = cardKeys.map((key, i) => {
    return ( <h5 cardKey = { i }> { key }: { subject[key] } </h5> )
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
