import React from 'react'
import MyComponent from './MyComponent';
import starship from '../assets/starship.jpeg'

const Starship = () => {
  return (
    <MyComponent 
      background={starship}
      launchTitle='STARSHIP FLIGHT TEST'
      watchButton='Rewatch'
    />
  )
}

export default Starship