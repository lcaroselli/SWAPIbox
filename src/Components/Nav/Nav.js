import React from 'react';
import './Nav.css';
import PropTypes from 'prop-types';

const Nav = ({ getCategoryData }) => {

  return(
    <div>
      <nav>
        <button className='people' onClick={ () => getCategoryData('people') } >People</button>
        <button className='planets' onClick={ () => getCategoryData('planets') } >Planets</button>
        <button className='vehicles' onClick={ () => getCategoryData('vehicles') } >Vehicles</button>
        <button className='favorites' onClick={ () => getCategoryData('category') } >Favorites</button>
      </nav>
    </div>
  )
}

Nav.propTypes = {
   getCategoryData: PropTypes.func.isRequired
 }

export default Nav;
