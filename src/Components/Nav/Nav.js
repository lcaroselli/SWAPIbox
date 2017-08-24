import React from 'react';
import './Nav.css';
import PropTypes from 'prop-types';

const Nav = ({ getCategoryData, getFavorites, favCount }) => {

  return(
    <div>
      <nav>
        <button onClick={ () => getCategoryData('people') } >People</button>
        <button onClick={ () => getCategoryData('planets') } >Planets</button>
        <button onClick={ () => getCategoryData('vehicles') } >Vehicles</button>
        <button onClick={ () => getFavorites() } >Favorites</button>
        <h4>{ favCount }</h4>
      </nav>
    </div>
  )
}

Nav.propTypes = {
   getCategoryData: PropTypes.func.isRequired
 }

export default Nav;
