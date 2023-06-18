import React from 'react'
import starship from '../assets/starship.jpeg'

const Starship = () => {
  const background = starship;
  const launchTitle = 'STARSHIP FLIGHT TEST';
  const watchButton = 'Rewatch';

  return (
    <div
      className='d-flex flex-column justify-content-end align-items-start p-3'
      style={{
        backgroundImage: `url(${background})`,
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='inner-left-bottom-satria'>
        <h1 className='mt-1'>{launchTitle}</h1>
        <button className='mt-4'>{watchButton}</button>
      </div>
    </div>
  )
}

export default Starship