import React, {Component} from 'react';
import './Card.css';
import Star from '../../../assets/favorites-star.svg';
import PropTypes from 'prop-types';

export default class Card extends Component {
  constructor() {
    super();
    this.favoriteCard = this.favoriteCard.bind(this)
  }

  favoriteCard(e) {

    this.props.addFavoriteObj(this)

    this.props.setFavoriteState(this)
  };

  render() {
    console.log('props', this.props)
    const { subject } = this.props
    let cardKeys = Object.keys(subject)
    cardKeys.splice(4, 2)

    const className = this.props.subject.Fav === true ? "favorited" : null

    let cardArray = cardKeys.map((key, i) => {
      return (
        <div>
          <p className='category-data'> { key }: { subject[key] } </p>
        </div>
      )
    })


    return(
      <div >
        <section className={ 'card ' + className }>
          <button className='favorite-btn' onClick={ this.favoriteCard.bind(this) }><img src={ Star } alt='star icon to favorite a card'/></button>
          { cardArray }
        </section>
      </div>
    )
  }

}

Card.propTypes = {
   subject: PropTypes.object.isRequired
 }
