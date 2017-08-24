import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';

const Header = ( { openText } ) => {
  const scrollText = openText.map((text) => {
    return (
      <div className='crawl'>
        <section className='crawl-container'>
          <p className='crawl-text'>{ text.Opening }</p>
          <p className='movie-title'>{ text.Title }</p>
          <p className='movie-release-date'>{ text.ReleaseDate }</p>
        </section>
      </div>
    )
  })

  return(
    <div>
      <p className='project-title'>SWAPIBox</p>
      <h1 className='header'> { scrollText } </h1>
    </div>
  )
}

Header.propTypes = {
   openText: PropTypes.array.isRequired
 }

export default Header;
