import React from 'react';
import './Card.css';
import Star from '../../../assets/favorites-star.svg';
import PropTypes from 'prop-types';

const Card = ( { subject } ) => {
  let cardKeys = Object.keys(subject)

  let cardArray = cardKeys.map((key, i) => {
    return (
      <div>
        <p className='category-data'> { key }: { subject[key] } </p>
      </div>
    )
  })

  return(
    <div>
      <section className='card'>
        <button className='favorite-btn'><img src={ Star } alt='star icon to favorite a card'/></button>
        { cardArray }
      </section>
    </div>
  )
}

Card.propTypes = {
   subject: PropTypes.object.isRequired
 }

export default Card
