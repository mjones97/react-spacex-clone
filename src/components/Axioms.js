import React from 'react'
import axioms from '../assets/ax2-mission.jpeg'

const Axioms = () => {
  const background = axioms;
  const launch = 'Completed Mission';
  const launchTitle = 'AX-2 MISSION';
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
        <h3 className='m-0'>{launch}</h3>
        <h1 className='mt-1'>{launchTitle}</h1>
        <button className='mt-4'>{watchButton}</button>
      </div>
    </div>
  )
}

export default Axioms