import React from 'react';
import './Card.css';
import Star from '../../../assets/favorites-star.svg'

const Card = ( { subject } ) => {
  let cardKeys = Object.keys(subject)

  let cardArray = cardKeys.map((key, i) => {
    console.log(key)
    return (
      <div>
        <p className='category-data'> { key }: { subject[key] } </p>
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
