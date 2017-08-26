import React from 'react';
import Card from "../Card/Card.js";
import './Container.css';
import PropTypes from 'prop-types';

const Container = ({ categoryData, setFavoriteState, addFavoriteObj }) => {

  const newCards = () => {
    if (categoryData.length > 0) {
      return categoryData.map(object => {
        return <Card
                subject={ object }
                setFavoriteState={ setFavoriteState }
                addFavoriteObj={ addFavoriteObj}
                />
      })
    }
  }

  return(
    <div>
      <section className='container'>
        { newCards() }
      </section>
    </div>
  )
}

Container.propTypes = {
   categoryData: PropTypes.array.isRequired
 }

export default Container
