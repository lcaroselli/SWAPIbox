import React from 'react'
import './Header.css';

const Header = ({ openingText }) => {


  return(
    <div>
    <h1 className='header'>{ openingText }</h1>
    </div>
  )
}

export default Header;
