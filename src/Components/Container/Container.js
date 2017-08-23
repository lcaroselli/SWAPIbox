import React from 'react'
import Card from "../Card/Card.js"
import './Container.css';

const Container = ({ categoryData }) => {

  const newCards = () => {
    if (categoryData.length > 0) {
      return categoryData.map(object => {
        return <Card
                subject = { object }
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

export default Container
