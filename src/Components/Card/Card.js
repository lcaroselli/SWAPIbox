import React, {Component} from 'react';
import './Card.css';
import Star from '../../../assets/favorites-star.svg';
import PropTypes from 'prop-types';

export default class Card extends Component {
  constructor() {
    super();
    this.favoriteCard = this.favoriteCard.bind(this)
      this.state = {
        favoriteClicked: false,
      }
  }

  favoriteCard(e) {
    if (this.state.favoriteClicked === false) {
      this.props.addFavoriteObj(this)
      this.setState({ favoriteClicked: true } )
    } else {
      this.setState({ favoriteClicked: false } )
      this.props.removeFavoriteObj(this)
    }
    this.props.setFavoriteState(this)
  };

  render() {
    const { subject } = this.props
    let cardKeys = Object.keys(subject)
    cardKeys.splice(4, 2)

    let cardArray = cardKeys.map((key, i) => {
      return (
        <div>
          <p className='category-data'> { key }: { subject[key] } </p>
        </div>
      )
    })


    return(
      <div >
        <section className={ this.state.favoriteClicked === true ? "card clicked-card" : "card" }>
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
