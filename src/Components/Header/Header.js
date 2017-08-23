import React from 'react'
import './Header.css';

const Header = ( { openText } ) => {
  const scrollText = openText.map((text) => {
    return (
      <div className='crawl'>
        <p className='crawl-text'>{ text.opening }</p>
        <p className='movie-title'>{ text.title }</p>
        <p className='movie-release-date'>{ text.releaseDate }</p>
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

export default Header;
