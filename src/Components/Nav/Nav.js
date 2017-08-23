import React from 'react';
import './Nav.css';

const Nav= ({ getCategoryData }) => {

  return(
    <div>
      <nav>
        <button onClick={ () => getCategoryData('people') }>People</button>
        <button onClick={ () => getCategoryData('planets') }>Planets</button>
        <button onClick={ () => getCategoryData('vehicles') }>Vehicles</button>
        <button onClick={ () => getCategoryData('category') }>Favorites</button>
      </nav>
    </div>
  )
}

export default Nav;
